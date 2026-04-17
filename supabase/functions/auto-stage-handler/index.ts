// // // supabase/functions/auto-stage-handler/index.ts
// // import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
// // import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// // const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
// // const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

// // const supabase = createClient(supabaseUrl, supabaseServiceKey)

// // serve(async (req) => {
// //   try {
// //     const { stage } = await req.json()

// //     if (stage === 'selection_end') {
// //       const { data: settings } = await supabase
// //         .from('competition_settings')
// //         .select('min_votes_for_selection')
// //         .single()

// //       const minVotes = settings?.min_votes_for_selection || 1000

// //       await supabase.rpc('deactivate_low_vote_contestants', {
// //         p_min_votes: minVotes
// //       })

// //       return new Response(
// //         JSON.stringify({ 
// //           success: true, 
// //           message: `Selection stage ended. Contestants with less than ${minVotes} votes were deactivated.` 
// //         }),
// //         { headers: { "Content-Type": "application/json" } }
// //       )
// //     }

// //     if (stage === 'finals_end') {
// //       await supabase
// //         .from('competition_settings')
// //         .update({ voting_enabled: false })
// //         .eq('id', 1)

// //       return new Response(
// //         JSON.stringify({ 
// //           success: true, 
// //           message: 'Finals stage ended. Voting has been disabled for all users.' 
// //         }),
// //         { headers: { "Content-Type": "application/json" } }
// //       )
// //     }

// //     return new Response(JSON.stringify({ error: 'Invalid stage' }), { status: 400 })

// //   } catch (error) {
// //     console.error(error)
// //     return new Response(
// //       JSON.stringify({ error: error.message }),
// //       { status: 500 }
// //     )
// //   }
// // })


// // supabase/functions/auto-stage-handler/index.ts
// import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
// import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// const supabaseUrl = Deno.env.get('NEXT_PUBLIC_SUPABASE_URL') ?? ''
// const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

// const supabase = createClient(supabaseUrl, supabaseServiceKey)

// serve(async (req) => {
//   try {
//     const { stage } = await req.json()

//     if (stage === 'selection_end') {
//       const { data: settings } = await supabase
//         .from('competition_settings')
//         .select('min_votes_for_selection')
//         .single()

//       const minVotes = settings?.min_votes_for_selection || 1000

//       await supabase.rpc('deactivate_low_vote_contestants', {
//         p_min_votes: minVotes
//       })

//       return new Response(
//         JSON.stringify({ 
//           success: true, 
//           message: `Selection stage ended. Contestants with less than ${minVotes} votes were deactivated.` 
//         }),
//         { headers: { "Content-Type": "application/json" } }
//       )
//     }

//     if (stage === 'finals_end') {
//       await supabase
//         .from('competition_settings')
//         .update({ voting_enabled: false })
//         .eq('id', 1)

//       return new Response(
//         JSON.stringify({ 
//           success: true, 
//           message: 'Finals stage ended. Voting has been disabled for all users.' 
//         }),
//         { headers: { "Content-Type": "application/json" } }
//       )
//     }

//     return new Response(JSON.stringify({ error: 'Invalid stage' }), { status: 400 })

//   } catch (error) {
//     console.error(error)
//     return new Response(
//       JSON.stringify({ error: error.message }),
//       { status: 500 }
//     )
//   }
// })



// supabase/functions/auto-stage-handler/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

const supabase = createClient(supabaseUrl, supabaseServiceKey)

serve(async (req) => {
  try {
    const { stage } = await req.json()

    if (stage === 'selection_end') {
      const { data: settings } = await supabase
        .from('competition_settings')
        .select('min_votes_for_selection')
        .eq('id', 1)
        .single()

      const minVotes = settings?.min_votes_for_selection || 1000

      await supabase.rpc('deactivate_low_vote_contestants', { 
        p_min_votes: minVotes 
      })

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: `Selection ended. Contestants below ${minVotes} votes deactivated.` 
        }),
        { headers: { "Content-Type": "application/json" } }
      )
    }

    if (stage === 'finals_end') {
      await supabase
        .from('competition_settings')
        .update({ voting_enabled: false })
        .eq('id', 1)

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Finals ended. Voting disabled globally.' 
        }),
        { headers: { "Content-Type": "application/json" } }
      )
    }

    return new Response(JSON.stringify({ error: 'Invalid stage' }), { status: 400 })

  } catch (error: any) {
    console.error('Edge Function Error:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }), 
      { status: 500 }
    )
  }
})