import { Calendar } from "lucide-react";

interface NoDataProps {
  title?: string;
  description?: string;
}

export default function NoData({
  title = "No Data Yet",
  description = "You have no data to display at the moment.",
}: NoDataProps) {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-6 text-center">
      <div className="w-11 h-11 mx-auto bg-secondary rounded-3xl flex items-center justify-center border border-border mb-2 relative">
        <Calendar className="w-16 h-16 text-primary" strokeWidth={1.5} />
        
        {/* Sad face inside calendar */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 border-2 border-muted-foreground rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-muted-foreground rounded-full border-t-transparent rotate-45" />
          </div>
        </div> */}
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground font-body max-w-sm text-xs">
        {description}
      </p>
    </div>
  );
}