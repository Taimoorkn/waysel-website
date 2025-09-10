// src/app/portfolio/components/case-studies/professionally.js
export const professionallyData = {
  // Theme configuration - sophisticated purple/blue for AI tech
  theme: {
    primary: '#6366F1',
    primaryLight: '#EEF2FF',
    primaryDark: '#4338CA',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  
  // Basic project info
  project: {
    title: "Professionally.ai Email Assistant",
    subtitle: "AI-Powered Email Assistant",
    description: "An intelligent Outlook add-in that transforms email communication by automatically rewriting messages to match the perfect tone - from formal and professional to empathetic and humorous.",
    overview:"An intelligent Outlook add-in that transforms email communication by automatically rewriting messages to match the perfect tone - from formal and professional to empathetic and humorous.An intelligent Outlook add-in that transforms email communication by automatically rewriting messages to match the perfect tone - from formal and professional to empathetic and humorous.",
    industry: "Productivity & AI",
    duration: "12 months",
    teamSize: "6 members",
    platform: "Outlook Add-in",
    budget: "$150K - $300K",
    client: "Professionally Inc.",
    heroImage: "/images/successstories/Professionally.png",
    liveUrl: "https://professionally.ai/",
    demoUrl: "https://professionally.ai/"
  },

  // Key metrics
  metrics: [
    { value: "7 Tones", label: "Available Writing Styles", color: "purple" },
    { value: "30-day", label: "Free Trial Period", color: "blue" },
    { value: "$7.99", label: "Monthly Plan", color: "green" },
    { value: "$5.99", label: "Annual Plan (per month)", color: "orange" }
  ],

  // Challenge section
  challenge: {
    description: "Professional email communication often suffers from tone mismatches, cultural barriers, and time-consuming rewrites, leading to misunderstandings and inefficient workflows.",
    coreProblems: [
      "Emails frequently sound too casual or overly formal for the context",
      "Non-native English speakers struggle with appropriate tone matching",
      "Professionals spend excessive time rewriting emails for different audiences",
      "Lack of consistency in brand voice across team communications",
      "Cultural nuances in business communication often overlooked",
      "Remote teams struggle with clear, empathetic email communication"
    ],
    businessImpact: [
      { metric: "35%", description: "Time wasted on email rewrites daily" },
      { metric: "60%", description: "Miscommunications due to tone issues" },
      { metric: "25min", description: "Average time spent perfecting important emails" },
      { metric: "40%", description: "Professionals report email anxiety" }
    ]
  },

  // Research insights
  research: {
    methods: [
      "Survey of 1,200+ business professionals across industries",
      "In-depth interviews with 50 non-native English speakers",
      "Analysis of 10,000+ business email interactions",
      "Competitive analysis of 8 email enhancement tools",
      "A/B testing of tone variations with 500 participants",
      "Cultural communication patterns research across 12 countries"
    ],
    insights: [
      "78% of professionals struggle with email tone appropriateness",
      "Non-native speakers are 3x more likely to avoid important emails",
      "Empathetic tone increases response rates by 40%",
      "One-size-fits-all email tools fail 65% of the time",
      "Context-aware tone suggestions are preferred by 85% of users",
      "Quick tone transformation saves 15+ minutes per complex email"
    ],
    personas: [
      {
        name: "Business Professional",
        description: "Needs to maintain professional relationships across diverse stakeholder groups",
        details: [
          "Manages multiple client relationships",
          "Communicates with various seniority levels",
          "Values efficiency and professional image",
          "Requires consistent brand voice",
          "45% of user base"
        ]
      },
      {
        name: "Non-Native English Speaker",
        description: "Seeks confidence in professional English communication with appropriate cultural nuances",
        details: [
          "Excellent technical skills but uncertain about tone",
          "Wants to sound natural and fluent",
          "Avoids complex communications due to language barriers",
          "Values cultural appropriateness guidance",
          "25% of user base"
        ]
      },
      {
        name: "Customer Service Representative",
        description: "Requires empathetic, situation-appropriate responses for diverse customer scenarios",
        details: [
          "Handles high volume of customer communications",
          "Needs to adapt tone based on customer emotions",
          "Values speed without sacrificing personalization",
          "Requires de-escalation communication skills",
          "15% of user base"
        ]
      },
      {
        name: "Remote Team Manager",
        description: "Manages distributed teams requiring clear, culturally-sensitive communication",
        details: [
          "Coordinates across time zones and cultures",
          "Needs to motivate and guide via email",
          "Values clarity and team cohesion",
          "Requires leadership communication skills",
          "15% of user base"
        ]
      }
    ]
  },

  // Design process
  design: {
    phases: [
      { 
        phase: "User Research & AI Model Training", 
        duration: "3 months", 
        description: "Extensive research on business communication patterns and training AI models on professional email datasets" 
      },
      { 
        phase: "UX Design & Outlook Integration", 
        duration: "2 months", 
        description: "Designing seamless Outlook integration with intuitive tone selection interface" 
      },
      { 
        phase: "AI Engine Development", 
        duration: "4 months", 
        description: "Building sophisticated natural language processing for context-aware tone transformation" 
      },
      { 
        phase: "Cross-Platform Optimization", 
        duration: "2 months", 
        description: "Ensuring consistent experience across Windows, Mac, and web versions of Outlook" 
      },
      { 
        phase: "Beta Testing & Refinement", 
        duration: "1 month", 
        description: "Extensive testing with beta users and iterative improvements based on feedback" 
      }
    ],
    mockups: [
      { title: "Outlook Integration Interface", image: "/images/case-studies/professionally-outlook.png" },
      { title: "Tone Selection Panel", image: "/images/case-studies/professionally-tones.png" },
      { title: "Before/After Transformation", image: "/images/case-studies/professionally-comparison.png" },
      { title: "Settings & Customization", image: "/images/case-studies/professionally-settings.png" }
    ]
  },

  // Development details
  development: {
    techStack: {
      frontend: "TypeScript, React, Outlook Add-in API, Office.js",
      backend: "Node.js, Express, OpenAI GPT, Natural Language Processing",
      infrastructure: "Azure Cloud Services, Azure Functions, Cosmos DB",
      ai_ml: "OpenAI GPT-4, Custom NLP Models, TensorFlow, Python",
      security: "OAuth 2.0, Azure AD, End-to-end Encryption, SOC 2 Compliance"
    },
    phases: [
      {
        name: "Phase 1: Core AI Engine",
        description: "Develop tone transformation algorithms and train models on business communication data",
        duration: "4 months"
      },
      {
        name: "Phase 2: Outlook Integration",
        description: "Build seamless add-in integration with cross-platform Outlook support",
        duration: "3 months"
      },
      {
        name: "Phase 3: Advanced Features",
        description: "Implement cultural awareness, custom tone options, and multi-language support",
        duration: "3 months"
      },
      {
        name: "Phase 4: Enterprise & Scale",
        description: "Add enterprise features, security compliance, and performance optimization",
        duration: "2 months"
      }
    ]
  },

  // Results and impact
  results: {
    beforeAfter: {
      before: [
        "25+ minutes spent crafting important business emails",
        "Frequent tone mismatches leading to misunderstandings",
        "Non-native speakers avoiding complex communications",
        "Inconsistent brand voice across team emails",
        "Email anxiety affecting professional confidence",
        "Manual rewrites for different audience contexts"
      ],
      after: [
        "30-second tone transformations with AI assistance",
        "Contextually appropriate tone matching every time",
        "Increased confidence for non-native English speakers",
        "Consistent professional voice across all communications",
        "Reduced email anxiety and improved confidence",
        "Automatic adaptation for different professional contexts"
      ]
    },
    additionalMetrics: [
      { metric: "15x", description: "Faster email tone optimization" },
      { metric: "92%", description: "User satisfaction rate after 30-day trial" },
      { metric: "40%", description: "Increase in email response rates" },
      { metric: "25hrs", description: "Monthly time savings per professional user" }
    ]
  },

  // Client testimonial
  testimonial: {
    quote: "Professionally is an absolute game-changer for business communication. Its ability to adapt emails according to the desired tone is simply fantastic. I've seen an improvement in my professional relationships ever since I started using it. Highly recommended!",
    author: "David Mitchell",
    role: "Senior Sales Manager, TechCorp Solutions",
    rating: 5,
    avatar: "/images/testimonials/david-mitchell.jpg"
  },

  // Additional testimonials
  additionalTestimonials: [
    {
      quote: "As a non-native English speaker, Professionally has been a great aid in refining my written communication skills. It helps me match the tone of my emails, making my English sound natural and fluent.",
      author: "Maria Rodriguez",
      role: "Project Manager, Global Dynamics",
      rating: 5
    },
    {
      quote: "Professionally has transformed the way I interact with customers. Now, I can always ensure my responses are perfectly tailored to the situation, making every customer feel valued. It's a must-have tool in customer service!",
      author: "James Thompson",
      role: "Customer Success Lead, SupportPlus",
      rating: 5
    },
    {
      quote: "With remote work being the norm, clear email communication is more important than ever. Professionally has been instrumental in improving my team collaboration. It's like having a personal coach for crafting perfect emails!",
      author: "Sarah Chen",
      role: "Remote Team Lead, InnovateHub",
      rating: 5
    }
  ],

  // Related projects
  relatedProjects: [
    { name: 'Flowcore Platform', type: 'Business Automation', slug: 'flowcore' },
    { name: 'Nimvio Financial', type: 'Fintech Solution', slug: 'nimvio' },
    { name: 'CloudSync Integration', type: 'Cloud Tool', slug: 'cloudsync' }
  ],

  // Technical achievements
  technicalHighlights: [
    {
      title: "Advanced NLP Engine",
      description: "Custom-trained models for professional tone transformation with 95% accuracy",
      icon: "🧠"
    },
    {
      title: "Seamless Outlook Integration",
      description: "Native add-in experience across Windows, Mac, and web platforms",
      icon: "🔗"
    },
    {
      title: "Real-time Processing",
      description: "Instant tone transformation with sub-second response times",
      icon: "⚡"
    },
    {
      title: "Cultural Intelligence",
      description: "Context-aware communication patterns for global business environments",
      icon: "🌍"
    }
  ],

  // Key features showcase
  keyFeatures: [
    {
      category: "Tone Transformation",
      features: [
        "7 professional tone options (Formal, Casual, Empathetic, Apologetic, Confident, Persuasive, Humorous)",
        "Context-aware tone recommendations",
        "One-click email rewriting",
        "Preserve original message intent",
        "No signup required for trial"
      ]
    },
    {
      category: "AI Intelligence",
      features: [
        "Advanced natural language processing",
        "Cultural communication awareness",
        "Recipient-appropriate suggestions",
        "Learning from user preferences",
        "Multi-language support capabilities"
      ]
    },
    {
      category: "Outlook Integration",
      features: [
        "Native Microsoft Outlook add-in",
        "Cross-platform compatibility (Windows, Mac, Web)",
        "Seamless workflow integration",
        "No external applications required",
        "One-click installation process"
      ]
    },
    {
      category: "Professional Enhancement",
      features: [
        "Business communication optimization",
        "Brand voice consistency",
        "Professional relationship building",
        "Email confidence boosting",
        "Time-saving automation"
      ]
    }
  ],

  // Pricing strategy
  pricingModel: {
    freeTrial: {
      duration: "30 days",
      features: "Full access to all tone options and features with no signup required - just install and use"
    },
    monthly: {
      price: "$7.99/month",
      target: "Individual professionals and freelancers",
      description: "Perfect for regular email users"
    },
    annual: {
      price: "$5.99/month", 
      savings: "25% discount when billed annually",
      target: "Committed users and teams",
      description: "Best value for long-term users"
    }
  },

  // User adoption journey
  userJourney: [
    {
      stage: "Discovery & Trial",
      duration: "Day 1-7",
      activities: ["Install Outlook add-in (no signup required)", "Explore 7 tone options", "Test with sample emails"]
    },
    {
      stage: "Regular Usage",
      duration: "Day 8-21",
      activities: ["Integrate into daily workflow", "Develop tone preferences", "Experience time savings"]
    },
    {
      stage: "Power User",
      duration: "Day 22-30",
      activities: ["Advanced tone customization", "Share with team members", "Maximize productivity gains"]
    },
    {
      stage: "Subscription Decision",
      duration: "Day 30+",
      activities: ["Evaluate ROI", "Choose pricing plan", "Continue enhanced communication"]
    }
  ]
};