import contestant1 from "@/public/images/contestant-1.jpg";
import contestant2 from "@/public/images/contestant-2.jpg";
import contestant3 from "@/public/images/contestant-3.jpg";
import contestant4 from "@/public/images/contestant-4.jpg";
import contestant5 from "@/public/images/contestant-5.jpg";
import contestant6 from "@/public/images/contestant-6.jpg";

export interface Contestant {
  id: string;
  name: string;
  representing: string;
  category: string;
  votes: number;
  image: string;
  age: number;
  bio: string;
  platform: string;
  education: string;
  likes: number;
  views: number;
  rank: number;
}

export const contestants: Contestant[] = [
  {
    id: "1",
    name: "Queen Amara",
    representing: "Uniport",
    category: "Miss MBGIPU",
    votes: 24850,
    // image: contestant1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkjgckv7AhKCbGAJw7fXU6B3yxWAcM6FjkUpoBj8q33usPhgQCTMT-j1pzs8O249z3PwEje2iS9EiIMAG4eAjaIGv-9EPq0-1xyxiO_FyMYbZDnKKXmjIbH726cEjLuh9680bP6F8czBHhFvzio5DeOjsXJiir7HINFY87WfQkuHTeBzVTrAZvfptfecCpLUoe9V7oWoNhsoMtrL1YMfYCA8YURlRvX7rA8MAMqWvO8nkZYdzbzVDQk-U8r6DNip0Zcf71O9k7ob3N",

    age: 23,
    bio: "Queen Amara is a passionate advocate for women's education and environmental sustainability. Her journey in MBGIPU 2024 is driven by her desire to inspire young women to pursue careers in STEM.",
    platform: "Women in STEM Education",
    education: "B.Sc. Environmental Science, Uniport",
    likes: 15200,
    views: 520000,
    rank: 1,
  },
  {
    id: "2",
    name: "Duchess Ifeoma",
    representing: "Uniport",
    category: "Mrs. MBGIPU",
    votes: 12400,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAANf7ZUmxDzZCRdqFQcczl0zxp7pMh84l2Sj-xFtDa7WddHkZZ-xLG4-_mXgqrVm2-O1D8dvtv5EAnkEFFc6W1qqmn-Y7rXwzFqpWZIy5b8nc8YmUJ7fXNx9p9u9uSh_mb_tguMvi0xwOtwNIC5QdcUa0dQ4D-eEmPqzSezPzmFG4zT6gv9Euu06iQgZVDC5i1ynbWC8UJ2ARCzLnOCBU0L-g1It9CfPaUCshqHt2_3JVJC4b-MgefEQYQGRajPpIdFdu2CE-EMGEi",
    age: 27,
    bio: "Isabella combines her passion for fashion with philanthropy, working with underprivileged communities to provide professional attire for job interviews.",
    platform: "Fashion for Empowerment",
    education: "MBA, Uniport",
    likes: 9800,
    views: 380000,
    rank: 4,
  },
  {
    id: "3",
    name: "Sophia Martinez",
    representing: "Uniport",
    category: "Teen MBGIPU",
    votes: 18202,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqkkuD5ecclpFJrHengelh8FUdN3o0l8VKm51HzoMB3SNH6qW7dFBhpGKnEec0-2EO_EMH9KHR-lP7aRG6gOLeE8n6esGwUlyE3rHO02K9HCsJI0kF3m-2va0p8-csZO7B7SarlhdS2dIc6uEQ4MdSUwVKNLcGDOq5KCMD9WXFP5l1x0aGml__6zTcdh-P8EjoOrCKAb82-r8ziFNNwz8NnZB6DQ9r02-hfVXOEjKj9eF1GrwbUpvmgneEkouHe5XfotUBMcq80SXv",
    age: 19,
    bio: "Sophia is a rising star in the arts community, using her platform to promote cultural diversity and inclusion through visual arts and performance.",
    platform: "Arts & Cultural Diversity",
    education: "Fine Arts, Uniport",
    likes: 12400,
    views: 450000,
    rank: 2,
  },
  {
    id: "4",
    name: "Amara Okafor",
    representing: "Uniport",
    category: "Miss MBGIPU",
    votes: 21150,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByt6d_iJb4KCbKsqGPKtRljP-crYKkoEiWlkkxKuhHnEf1fJ8RJ3_bNsXRdec4EbWSeK3cYtASYyTXeOBn35xWOIW0j-n2wcnLNFa_VZroprlm4S8i_BHdi3FFL-RcPrmqRqdyiRNJEByrheG4Rs3-vHnqKrIF9MBdUk2jEoulghPiN2JjOm__7CkxNZa2htMnjTr4hCh-5pKJ7s67X2JQ-3rso1eJyZBCcIwpor00tUs2wf1ATOWq5Bx2QnsNE9Sqc2TwUf2rhB7X",
    age: 24,
    bio: "Amara is a graduate in Sustainable Architecture and a passionate advocate for environmental conservation. She believes true beauty lies in the impact one leaves on the planet.",
    platform: "Urban Sustainability & Green Spaces",
    education: "B.Arch, Uniport",
    likes: 13600,
    views: 490000,
    rank: 3,
  },
  {
    id: "5",
    name: "Lily Thompson",
    representing: "UST",
    category: "Teen MBGIPU",
    votes: 9820,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1F5zZj33nOPMP7RudNlq8YYCxWCSjXelY1msMT2N19GUFMNPI3SZ4ZjbE0FRBhfxLWFDeq2NselDvA1FxdpQ5NSdEn_Qmxoj12cNqhC7fGIyxvnyDOhZ2brAoC55BkIc8c_6X0OOotxNKp4h--7f-s4vCQ_J33hk2cW-YH0UNaPf_8TzIj9_kSM1GfphTOaAdqCKLsWThTkcDn0aPEl21-O-pvMRJZfXSsz_MFwuDO5Lq6pY6Ni5BeAocR2HhY0_bFqrS_iy0XyKG",
    age: 18,
    bio: "Lily is a young activist focused on mental health awareness among teenagers. She runs workshops and support groups in her community.",
    platform: "Teen Mental Health Advocacy",
    education: "Psychology, UST",
    likes: 7200,
    views: 290000,
    rank: 6,
  },
  {
    id: "6",
    name: "Victoria Chen",
    representing: "Uniport",
    category: "Mrs. MBGIPU",
    votes: 14300,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsU1OvCmZRMVqL5P8Cqv-nXuU5RIYCsWqJgI3BqHdDhiI6ErA-Sdn_-DF8_ibxcnREu63ru8p5ABCsWbef63xuH8OLufI87yN7W-M5LtANn5fTtneAYpxnUBeKGHhIi1N-Ox-JzyhqwavcI7HvdAxvKN2KU9E1mlk7bfPvi4mjuLgmGuSpWVTIxP7XQTnVuQvPAkwH_z0Dd3pzeyGDrszxlPAFSB2PIwaEzjlt4fymXDEz0jyPHdn6INBYnXRXNnL09hAoh7xXa--n",
    age: 29,
    bio: "Victoria is a tech entrepreneur who founded a coding bootcamp for women from underrepresented backgrounds.",
    platform: "Tech Inclusion & Digital Literacy",
    education: "M.Sc. Computer Science, Uniport",
    likes: 10500,
    views: 410000,
    rank: 5,
  },
];

export const categories = ["All Categories", "Miss MBGIPU", "Mrs. MBGIPU", "Teen MBGIPU", "Elite MBGIPU"];
