export interface College {
  id: number;
  name: string;
  fees: number;
  rating: number;
  reviews: {
    count: number;
    tags: string[];
  };
  placement: {
    avg_package: number;
    highest_package: number;
  };
  featured: boolean;
  cd_rank: number;
  img: string;
  branchwise_cutoff?: {
    branch: string;
    branch_cutoff: number;
  };
  address?: string;
  ranking?: {
    rank: number;
    total_ranks: number;
    rank_year: number;
  };
}

export const collegesData: College[] = [
  {
    "id": 1,
    "name": "IIT Madras",
    "fees": 279550,
    "rating": 8.8,
    "reviews": {
      "count": 9,
      "tags": [
        "Best in Infrastructure"
      ]
    },
    "placement": {
      "avg_package": 2114800,
      "highest_package": 4200000
    },
    "featured": false,
    "cd_rank": 1,
    "img": "images/iit-madras.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT Madras, Chennai, Tamil Nadu, India",
    "ranking": {
      "rank": 2,
      "total_ranks": 48,
      "rank_year": 2023
    }
  },
  {
    "id": 2,
    "name": "IIT Delhi",
    "fees": 254550,
    "rating": 8.7,
    "reviews": {
      "count": 8,
      "tags": [
        "Best in Academics"
      ]
    },
    "placement": {
      "avg_package": 2328000,
      "highest_package": 4500000
    },
    "featured": true,
    "cd_rank": 3,
    "img": "images/iit-delhi.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT Delhi, Hauz Khas, New Delhi, India",
    "ranking": {
      "rank": 4,
      "total_ranks": 50,
      "rank_year": 2022
    }
  },
  {
    "id": 3,
    "name": "Parul University",
    "fees": 149000,
    "rating": 8.1,
    "reviews": {
      "count": 8,
      "tags": []
    },
    "placement": {
      "avg_package": 400000,
      "highest_package": 1200000
    },
    "featured": false,
    "cd_rank": 8,
    "img": "images/parul-university.png",
    "address": "Parul University, Limda, Vadodara, Gujarat, India",
    "ranking": {
      "rank": 22,
      "total_ranks": 135,
      "rank_year": 2021
    }
  },
  {
    "id": 4,
    "name": "IIT Bombay",
    "fees": 229300,
    "rating": 8.8,
    "reviews": {
      "count": 10,
      "tags": [
        "Best in Social Life"
      ]
    },
    "placement": {
      "avg_package": 2139200,
      "highest_package": 4300000
    },
    "featured": true,
    "cd_rank": 2,
    "img": "images/iit-bombay.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT Bombay, Powai, Mumbai, Maharashtra, India",
    "ranking": {
      "rank": 1,
      "total_ranks": 48,
      "rank_year": 2023
    }
  },
  {
    "id": 5,
    "name": "IIT Kanpur",
    "fees": 230000,
    "rating": 8.5,
    "reviews": {
      "count": 7,
      "tags": [
        "Best in Academics"
      ]
    },
    "placement": {
      "avg_package": 2100000,
      "highest_package": 4200000
    },
    "featured": true,
    "cd_rank": 5,
    "img": "images/iit-kanpur.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT Kanpur, Kanpur, Uttar Pradesh, India",
    "ranking": {
      "rank": 7,
      "total_ranks": 49,
      "rank_year": 2022
    }
  },
  {
    "id": 6,
    "name": "Manipal University",
    "fees": 180000,
    "rating": 8.3,
    "reviews": {
      "count": 6,
      "tags": [
        "Best in Infrastructure"
      ]
    },
    "placement": {
      "avg_package": 1200000,
      "highest_package": 3000000
    },
    "featured": false,
    "cd_rank": 7,
    "img": "images/manipal-university.png",
    "address": "Manipal University, Manipal, Karnataka, India",
    "ranking": {
      "rank": 15,
      "total_ranks": 130,
      "rank_year": 2020
    }
  },
  {
    "id": 7,
    "name": "SRM University",
    "fees": 200000,
    "rating": 8.0,
    "reviews": {
      "count": 5,
      "tags": [
        "Best in Social Life"
      ]
    },
    "placement": {
      "avg_package": 1400000,
      "highest_package": 3100000
    },
    "featured": false,
    "cd_rank": 6,
    "img": "images/srm-university.png",
    "address": "SRM University, Kattankulathur, Tamil Nadu, India",
    "ranking": {
      "rank": 19,
      "total_ranks": 135,
      "rank_year": 2024
    }
  },
  {
    "id": 8,
    "name": "BITS Pilani",
    "fees": 250000,
    "rating": 8.9,
    "reviews": {
      "count": 11,
      "tags": [
        "Best in Academics"
      ]
    },
    "placement": {
      "avg_package": 2200000,
      "highest_package": 4600000
    },
    "featured": true,
    "cd_rank": 4,
    "img": "images/bits-pilani.png",
    "address": "BITS Pilani, Pilani, Rajasthan, India",
    "ranking": {
      "rank": 6,
      "total_ranks": 47,
      "rank_year": 2022
    }
  },
  {
    "id": 9,
    "name": "Amity University",
    "fees": 180000,
    "rating": 7.8,
    "reviews": {
      "count": 4,
      "tags": []
    },
    "placement": {
      "avg_package": 1000000,
      "highest_package": 2500000
    },
    "featured": false,
    "cd_rank": 9,
    "img": "images/amity-university.png",
    "address": "Amity University, Noida, Uttar Pradesh, India",
    "ranking": {
      "rank": 27,
      "total_ranks": 120,
      "rank_year": 2023
    }
  },
  {
    "id": 10,
    "name": "VIT Vellore",
    "fees": 200000,
    "rating": 8.2,
    "reviews": {
      "count": 6,
      "tags": [
        "Best in Infrastructure"
      ]
    },
    "placement": {
      "avg_package": 1600000,
      "highest_package": 3500000
    },
    "featured": false,
    "cd_rank": 10,
    "img": "images/vit-vellore.png",
    "address": "VIT University, Vellore, Tamil Nadu, India",
    "ranking": {
      "rank": 12,
      "total_ranks": 130,
      "rank_year": 2021
    }
  },
  {
    "id": 11,
    "name": "University of Delhi",
    "fees": 130000,
    "rating": 7.5,
    "reviews": {
      "count": 3,
      "tags": []
    },
    "placement": {
      "avg_package": 800000,
      "highest_package": 2000000
    },
    "featured": false,
    "cd_rank": 11,
    "img": "images/university-of-delhi.png",
    "address": "University of Delhi, New Delhi, India",
    "ranking": {
      "rank": 35,
      "total_ranks": 125,
      "rank_year": 2023
    }
  },
  {
    "id": 12,
    "name": "University of Mumbai",
    "fees": 150000,
    "rating": 8.3,
    "reviews": {
      "count": 4,
      "tags": [
        "Best in Social Life"
      ]
    },
    "placement": {
      "avg_package": 1200000,
      "highest_package": 3000000
    },
    "featured": false,
    "cd_rank": 12,
    "img": "images/university-of-mumbai.png",
    "address": "University of Mumbai, Mumbai, Maharashtra, India",
    "ranking": {
      "rank": 33,
      "total_ranks": 130,
      "rank_year": 2020
    }
  },
  {
    "id": 13,
    "name": "Jadavpur University",
    "fees": 145000,
    "rating": 7.9,
    "reviews": {
      "count": 5,
      "tags": []
    },
    "placement": {
      "avg_package": 1100000,
      "highest_package": 2200000
    },
    "featured": false,
    "cd_rank": 13,
    "img": "images/jadavpur-university.png",
    "address": "Jadavpur University, Kolkata, West Bengal, India",
    "ranking": {
      "rank": 31,
      "total_ranks": 140,
      "rank_year": 2023
    }
  },
  {
    "id": 14,
    "name": "Shiv Nadar University",
    "fees": 240000,
    "rating": 8.6,
    "reviews": {
      "count": 6,
      "tags": [
        "Best in Infrastructure"
      ]
    },
    "placement": {
      "avg_package": 1600000,
      "highest_package": 3500000
    },
    "featured": false,
    "cd_rank": 14,
    "img": "images/shiv-nadar-university.png",
    "address": "Shiv Nadar University, Greater Noida, Uttar Pradesh, India",
    "ranking": {
      "rank": 25,
      "total_ranks": 130,
      "rank_year": 2020
    }
  },
  {
    "id": 15,
    "name": "IIT Roorkee",
    "fees": 260000,
    "rating": 8.7,
    "reviews": {
      "count": 7,
      "tags": [
        "Best in Academics"
      ]
    },
    "placement": {
      "avg_package": 2400000,
      "highest_package": 4800000
    },
    "featured": true,
    "cd_rank": 15,
    "img": "images/iit-roorkee.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT Roorkee, Roorkee, Uttarakhand, India"
  },
  {
    "id": 16,
    "name": "IIT Guwahati",
    "fees": 265000,
    "rating": 8.3,
    "reviews": {
      "count": 5,
      "tags": []
    },
    "placement": {
      "avg_package": 2300000,
      "highest_package": 4500000
    },
    "featured": true,
    "cd_rank": 16,
    "img": "images/iit-guwahati.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT Guwahati, Guwahati, Assam, India"
  },
  {
    "id": 17,
    "name": "IIT Indore",
    "fees": 230000,
    "rating": 8.4,
    "reviews": {
      "count": 6,
      "tags": [
        "Best in Academics"
      ]
    },
    "placement": {
      "avg_package": 2100000,
      "highest_package": 4200000
    },
    "featured": true,
    "cd_rank": 17,
    "img": "images/iit-indore.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT Indore, Indore, Madhya Pradesh, India"
  },
  {
    "id": 18,
    "name": "NIT Trichy",
    "fees": 180000,
    "rating": 8.5,
    "reviews": {
      "count": 7,
      "tags": [
        "Best in Infrastructure"
      ]
    },
    "placement": {
      "avg_package": 1800000,
      "highest_package": 4000000
    },
    "featured": false,
    "cd_rank": 18,
    "img": "images/nit-trichy.png",
    "address": "NIT Trichy, Tiruchirappalli, Tamil Nadu, India"
  },
  {
    "id": 19,
    "name": "NIT Surathkal",
    "fees": 170000,
    "rating": 8.2,
    "reviews": {
      "count": 8,
      "tags": [
        "Best in Academics"
      ]
    },
    "placement": {
      "avg_package": 1900000,
      "highest_package": 3800000
    },
    "featured": false,
    "cd_rank": 19,
    "img": "images/nit-surathkal.png",
    "address": "NIT Surathkal, Mangaluru, Karnataka, India"
  },
  {
    "id": 283,
    "name": "IIT BHU",
    "fees": 260000,
    "rating": 8.0,
    "reviews": {
      "count": 9,
      "tags": []
    },
    "placement": {
      "avg_package": 2200000,
      "highest_package": 4500000
    },
    "featured": true,
    "cd_rank": 20,
    "img": "images/iit-bhu.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT BHU, Varanasi, Uttar Pradesh, India"
  },
  {
    "id": 20,
    "name": "IIT BHU",
    "fees": 260000,
    "rating": 8.0,
    "reviews": {
      "count": 9,
      "tags": []
    },
    "placement": {
      "avg_package": 2200000,
      "highest_package": 4500000
    },
    "featured": true,
    "cd_rank": 20,
    "img": "images/iit-bhu.png",
    "branchwise_cutoff": {
      "branch": "mathematics and computing",
      "branch_cutoff": 289
    },
    "address": "IIT BHU, Varanasi, Uttar Pradesh, India"
  },
  {
    "id": 20,
    "name": "IIT BHU",
    "fees": 260000,
    "rating": 8.0,
    "reviews": {
      "count": 9,
      "tags": []
    },
    "placement": {
      "avg_package": 2200000,
      "highest_package": 4500000
    },
    "featured": true,
    "cd_rank": 20,
    "img": "images/iit-bhu.png"
  },
  {
    "id": 21,
    "name": "Dummy College 1",
    "fees": 200000,
    "rating": 7.6,
    "reviews": {
      "count": 5,
      "tags": []
    },
    "placement": {
      "avg_package": 1200000,
      "highest_package": 3200000
    },
    "featured": false,
    "cd_rank": 21,
    "img": "images/dummy-college-1.png"
  },
  {
    "id": 22,
    "name": "Dummy College 2",
    "fees": 190000,
    "rating": 7.7,
    "reviews": {
      "count": 4,
      "tags": []
    },
    "placement": {
      "avg_package": 1100000,
      "highest_package": 2800000
    },
    "featured": false,
    "cd_rank": 22,
    "img": "images/dummy-college-2.png"
  },
  {
    "id": 23,
    "name": "Dummy College 3",
    "fees": 210000,
    "rating": 7.8,
    "reviews": {
      "count": 6,
      "tags": [
        "Best in Social Life"
      ]
    },
    "placement": {
      "avg_package": 1300000,
      "highest_package": 3000000
    },
    "featured": false,
    "cd_rank": 23,
    "img": "images/dummy-college-3.png"
  },
  {
    "id": 24,
    "name": "Dummy College 4",
    "fees": 195000,
    "rating": 7.9,
    "reviews": {
      "count": 3,
      "tags": []
    },
    "placement": {
      "avg_package": 1200000,
      "highest_package": 2900000
    },
    "featured": false,
    "cd_rank": 24,
    "img": "images/dummy-college-4.png"
  },
  {
    "id": 25,
    "name": "Dummy College 5",
    "fees": 220000,
    "rating": 8.1,
    "reviews": {
      "count": 8,
      "tags": [
        "Best in Infrastructure"
      ]
    },
    "placement": {
      "avg_package": 1400000,
      "highest_package": 3100000
    },
    "featured": false,
    "cd_rank": 25,
    "img": "images/dummy-college-5.png"
  },
  {
    "id": 26,
    "name": "Dummy College 6",
    "fees": 200000,
    "rating": 8.0,
    "reviews": {
      "count": 7,
      "tags": []
    },
    "placement": {
      "avg_package": 1500000,
      "highest_package": 3200000
    },
    "featured": false,
    "cd_rank": 26,
    "img": "images/dummy-college-6.png"
  },
  {
    "id": 27,
    "name": "Dummy College 7",
    "fees": 180000,
    "rating": 7.5,
    "reviews": {
      "count": 6,
      "tags": [
        "Best in Academics"
      ]
    },
    "placement": {
      "avg_package": 1100000,
      "highest_package": 2600000
    },
    "featured": false,
    "cd_rank": 27,
    "img": "images/dummy-college-7.png"
  },
  {
    "id": 28,
    "name": "Dummy College 8",
    "fees": 195000,
    "rating": 7.4,
    "reviews": {
      "count": 5,
      "tags": []
    },
    "placement": {
      "avg_package": 1200000,
      "highest_package": 2700000
    },
    "featured": false,
    "cd_rank": 28,
    "img": "images/dummy-college-8.png"
  },
  {
    "id": 29,
    "name": "Dummy College 9",
    "fees": 210000,
    "rating": 8.3,
    "reviews": {
      "count": 7,
      "tags": [
        "Best in Social Life"
      ]
    },
    "placement": {
      "avg_package": 1300000,
      "highest_package": 2800000
    },
    "featured": false,
    "cd_rank": 29,
    "img": "images/dummy-college-9.png"
  },
  {
    "id": 30,
    "name": "Dummy College 10",
    "fees": 220000,
    "rating": 8.2,
    "reviews": {
      "count": 6,
      "tags": []
    },
    "placement": {
      "avg_package": 1250000,
      "highest_package": 2900000
    },
    "featured": false,
    "cd_rank": 30,
    "img": "images/dummy-college-10.png"
  }
]