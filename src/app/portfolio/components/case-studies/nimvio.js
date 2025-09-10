// src/app/portfolio/components/case-studies/nimvio.js
export const nimvioData = {
  theme: {
    primary: '#6366F1',    // Different color for Nimvio
    primaryLight: '#EEF2FF',
    primaryDark: '#4338CA',
    success: '#10B981',
    warning: '#F59E0B', 
    error: '#EF4444'
  },
  
  project: {
    title: "Nimvio Fintech Platform",
    subtitle: "Next-Generation Financial Technology Solution",
    description: "A sleek, responsive fintech platform that revolutionized digital banking for startups, increasing user engagement by 250% and reducing transaction times by 80%.",
    industry: "Fintech",
    duration: "8 months",
    teamSize: "12 members", 
    platform: "Web App + Mobile",
    budget: "$500K - $1M",
    client: "Nimvio Financial",
    heroImage: "/images/case-studies/nimvio-hero.png",
    liveUrl: "https://nimvio.example.com",
    demoUrl: "https://demo.nimvio.example.com"
  },
  
  metrics: [
    { value: "250%", label: "User Engagement", color: "indigo" },
    { value: "80%", label: "Faster Transactions", color: "green" },
    { value: "99.9%", label: "Uptime Achieved", color: "blue" },
    { value: "50K+", label: "Active Users", color: "purple" }
  ],

  // Challenge section
  challenge: {
    description: "Traditional banking solutions were failing to meet the needs of modern startups, with slow transaction processing, poor user experience, and limited digital integration capabilities.",
    coreProblems: [
      "Legacy banking systems with 3-5 day transaction processing",
      "Complex onboarding requiring 2+ weeks for business accounts",
      "Limited API integration for modern business tools",
      "Poor mobile experience affecting user adoption",
      "High transaction fees impacting startup cash flow",
      "Lack of real-time financial insights and analytics"
    ],
    businessImpact: [
      { metric: "$1.2M", description: "Monthly revenue loss due to slow processing" },
      { metric: "65%", description: "User drop-off during onboarding" },
      { metric: "3.2/5", description: "Average customer satisfaction score" },
      { metric: "45%", description: "Mobile app abandonment rate" }
    ]
  },

  // Research insights
  research: {
    methods: [
      "30 startup founder interviews",
      "5 detailed user persona development",
      "Competitive analysis of 15 fintech platforms",
      "User journey mapping across 3 key workflows",
      "A/B testing on 12 different interface concepts",
      "Financial regulation compliance research"
    ],
    insights: [
      "90% of startups prioritize speed over advanced features",
      "Real-time notifications are critical for business operations",
      "Mobile-first approach essential for modern entrepreneurs",
      "API-first architecture needed for seamless integrations",
      "Transparent pricing builds trust with startup founders",
      "Visual financial dashboards improve decision-making"
    ],
    personas: [
      {
        name: "Startup Founder",
        description: "Needs quick, reliable banking solutions to focus on growing their business",
        details: [
          "Values speed and efficiency above all",
          "Requires seamless mobile access",
          "Needs transparent, predictable pricing",
          "Wants integrated financial insights"
        ]
      },
      {
        name: "Finance Manager", 
        description: "Manages day-to-day financial operations and needs detailed control and reporting",
        details: [
          "Requires comprehensive financial reporting",
          "Needs bulk transaction capabilities",
          "Values security and compliance features",
          "Wants automated reconciliation tools"
        ]
      },
      {
        name: "Operations Lead",
        description: "Handles vendor payments and needs efficient payment processing workflows",
        details: [
          "Processes high volume of transactions",
          "Needs approval workflows and controls",
          "Requires integration with expense tools",
          "Values automated payment scheduling"
        ]
      }
    ]
  },

  // Design process
  design: {
    phases: [
      { 
        phase: "Discovery & Research", 
        duration: "3 weeks", 
        description: "User research, competitive analysis, and requirement gathering with regulatory compliance review" 
      },
      { 
        phase: "Information Architecture", 
        duration: "2 weeks", 
        description: "User flow mapping, feature prioritization, and system architecture planning" 
      },
      { 
        phase: "UI/UX Design", 
        duration: "6 weeks", 
        description: "Wireframing, high-fidelity designs, and interactive prototypes with accessibility considerations" 
      },
      { 
        phase: "Design System", 
        duration: "3 weeks", 
        description: "Component library creation, design tokens, and brand guideline development" 
      },
      { 
        phase: "User Testing", 
        duration: "2 weeks", 
        description: "Usability testing, stakeholder feedback, and iterative design improvements" 
      }
    ],
    mockups: [
      { title: "Dashboard Interface", image: "/images/case-studies/nimvio-dashboard.png" },
      { title: "Mobile Banking App", image: "/images/case-studies/nimvio-mobile.png" },
      { title: "Transaction Flow", image: "/images/case-studies/nimvio-transactions.png" },
      { title: "Analytics Dashboard", image: "/images/case-studies/nimvio-analytics.png" }
    ]
  },

  // Development details
  development: {
    techStack: {
      frontend: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
      backend: "Node.js, Express, GraphQL, PostgreSQL, Redis, Bull Queue", 
      infrastructure: "AWS ECS, RDS, ElastiCache, CloudWatch, Terraform",
      security: "OAuth 2.0, JWT, PCI DSS Compliance, End-to-end Encryption",
      integrations: "Plaid API, Stripe Connect, Webhooks, REST APIs"
    },
    phases: [
      {
        name: "Phase 1: Core Banking Features",
        description: "Account management, basic transactions, user authentication, and compliance framework",
        duration: "10 weeks",
        color: "indigo"
      },
      {
        name: "Phase 2: Advanced Features", 
        description: "Real-time payments, API integrations, mobile app, and analytics dashboard",
        duration: "8 weeks",
        color: "green"
      },
      {
        name: "Phase 3: Enterprise & Scale",
        description: "Advanced security, bulk operations, admin tools, and performance optimization",
        duration: "6 weeks", 
        color: "purple"
      },
      {
        name: "Phase 4: Launch & Optimization",
        description: "Beta testing, performance tuning, monitoring setup, and production deployment",
        duration: "4 weeks", 
        color: "blue"
      }
    ]
  },

  // Results and impact
  results: {
    beforeAfter: {
      before: [
        "3-5 day transaction processing times",
        "2+ week account onboarding process",
        "65% user drop-off during signup",
        "Limited mobile functionality",
        "No real-time financial insights",
        "High customer service workload"
      ],
      after: [
        "Instant transaction processing and notifications",
        "15-minute digital onboarding process",
        "12% user drop-off rate with guided flows",
        "Full-featured mobile app with 4.8/5 rating",
        "Real-time financial dashboard and analytics",
        "80% reduction in support tickets"
      ]
    },
    additionalMetrics: [
      { metric: "$50M+", description: "Total transaction volume in first 6 months" },
      { metric: "4.8/5", description: "App Store rating" },
      { metric: "300ms", description: "Average API response time" },
      { metric: "99.99%", description: "Platform uptime achieved" }
    ]
  },

  // Client testimonial
  testimonial: {
    quote: "Nimvio has completely transformed how we handle our finances. What used to take days now happens instantly. The platform is intuitive, secure, and has saved us countless hours every month. Our team can now focus on growing our business instead of wrestling with banking processes.",
    author: "Sarah Chen",
    role: "CEO & Co-founder, TechStart Ventures",
    rating: 5,
    avatar: "/images/testimonials/sarah-chen.jpg"
  },

  // Additional testimonials for variety
  additionalTestimonials: [
    {
      quote: "The API integration was seamless. We connected our entire financial workflow in under an hour.",
      author: "Michael Rodriguez",
      role: "CTO, InnovateLab",
      rating: 5
    },
    {
      quote: "Finally, a banking platform that understands startups. The real-time insights help us make better decisions.",
      author: "Emily Johnson", 
      role: "Finance Director, GrowthCorp",
      rating: 5
    }
  ],

  // Related projects
  relatedProjects: [
    { name: 'Flowcore Platform', type: 'Business Automation', slug: 'flowcore' },
    { name: 'CloudSync Integration', type: 'Cloud Solution', slug: 'cloudsync' },
    { name: 'ExtenderPro', type: 'Browser Extension', slug: 'extenderpro' }
  ],

  // Technical achievements
  technicalHighlights: [
    {
      title: "Real-time Processing",
      description: "Built custom event-driven architecture for instant transaction processing",
      icon: "⚡"
    },
    {
      title: "Bank-level Security",
      description: "Implemented PCI DSS compliance with end-to-end encryption",
      icon: "🔒"
    },
    {
      title: "Scalable Architecture", 
      description: "Microservices architecture handling 10K+ concurrent users",
      icon: "📈"
    },
    {
      title: "API-first Design",
      description: "GraphQL API with 99.9% uptime and comprehensive documentation",
      icon: "🔌"
    }
  ],

  // Key features showcase
  keyFeatures: [
    {
      category: "Banking Core",
      features: [
        "Instant money transfers",
        "Multi-currency support", 
        "Automated reconciliation",
        "Expense categorization",
        "Bulk payment processing"
      ]
    },
    {
      category: "Business Intelligence",
      features: [
        "Real-time financial dashboard",
        "Cash flow forecasting",
        "Spending analytics",
        "Custom financial reports",
        "Budget tracking & alerts"
      ]
    },
    {
      category: "Integrations",
      features: [
        "Accounting software sync",
        "E-commerce platform integration",
        "Payroll system connection",
        "Tax software compatibility",
        "Third-party app ecosystem"
      ]
    }
  ]
};