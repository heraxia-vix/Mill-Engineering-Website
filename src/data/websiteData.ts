export interface Capability {
  id: string;
  category: 'Engineering Solutions' | 'Modernization' | 'Industrial Technologies' | 'Project Support';
  title: string;
  shortDesc: string;
  fullDesc: string;
  focusAreas: string[];
  typicalOutcomes: string[];
  icon: 'gear' | 'wrench' | 'gauge' | 'cpu' | 'layers' | 'refresh';
}

export interface Industry {
  id: string;
  title: string;
  index: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  operatingConditions: string[];
  challenges: string[];
  solutions: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Engineering Notes' | 'Technical Brochure' | 'FAQ' | 'Download' | 'Coming Soon';
  description: string;
  readTime?: string;
  topics: string[];
}

export const CAPABILITIES: Capability[] = [
  // Engineering Solutions
  {
    id: 'engineering-advisory',
    category: 'Engineering Solutions',
    title: 'Engineering Advisory',
    shortDesc: 'Independent engineering evaluation and technical guidance for modernization, upgrades and new projects.',
    fullDesc: 'Independent engineering evaluation and technical guidance for modernization, upgrades and greenfield or brownfield projects. We act as an objective technical sounding board before capital commitments are made.',
    focusAreas: [
      'Pre-feasibility & technical scoping studies',
      'System sizing, hydraulic circuit audits and mechanical reviews',
      'Vendor technology validation and specification compliance',
      'Risk assessment of legacy mechanical installations'
    ],
    typicalOutcomes: [
      'Elimination of unviable technology options early',
      'Clear, defensible Capex justification',
      'Documented engineering specifications for procurement'
    ],
    icon: 'gear'
  },
  {
    id: 'technology-evaluation',
    category: 'Engineering Solutions',
    title: 'Technology Evaluation',
    shortDesc: 'Assessment of suitable technologies based on application requirements rather than product preference.',
    fullDesc: 'Assessment of suitable technologies based strictly on application requirements rather than vendor catalogue preference. We assess fit-for-purpose solutions tailored to harsh Indian plant environments.',
    focusAreas: [
      'Comparative benchmarking of competing OEM solutions',
      'Compatibility assessment with existing piping, drives and PLCs',
      'Total cost of ownership (TCO) & lifecycle maintenance cost modeling',
      'Reliability history and failure mode analysis of candidate components'
    ],
    typicalOutcomes: [
      'Selection of equipment matched to exact duty cycles',
      'Avoiding proprietary lock-in with closed systems',
      'Extended component mean time between failures (MTBF)'
    ],
    icon: 'gear'
  },
  {
    id: 'industrial-modernization',
    category: 'Engineering Solutions',
    title: 'Industrial Modernization',
    shortDesc: 'Engineering-led modernization focused on improving lifecycle value and plant performance.',
    fullDesc: 'Engineering-led modernization focused on improving lifecycle value, cycle repeatability, and plant performance without unnecessary wholesale machine replacement.',
    focusAreas: [
      'Phased modernization planning to minimize shutdown windows',
      'Retrofit engineering for structural and mechanical interfaces',
      'Transitioning from legacy proportional to modern digital servo controls',
      'Energy efficiency optimization in high-pressure hydraulic drives'
    ],
    typicalOutcomes: [
      '30-60% Capex savings compared to buying new machinery',
      'Shortened commissioning downtime during planned outages',
      'Readily accessible spares and modernized maintenance protocols'
    ],
    icon: 'gear'
  },

  // Modernization
  {
    id: 'extrusion-press-modernization',
    category: 'Modernization',
    title: 'Extrusion Press Modernization',
    shortDesc: 'Assessment of existing extrusion press systems, hydraulic improvements, modernization planning, reliability enhancement and integration of suitable technologies to improve productivity and equipment life.',
    fullDesc: 'Comprehensive assessment of existing aluminum and copper extrusion press systems, hydraulic improvements, modernization planning, reliability enhancement and integration of suitable technologies to improve productivity and equipment life.',
    focusAreas: [
      'Main ram, container and side cylinder hydraulic circuit optimization',
      'High-speed prefill valve rebuild and modern cartridge valve manifold retrofits',
      'Ram speed and pressure closed-loop servo control integration',
      'De-aeration, hydraulic shock reduction, and decompression smoothing'
    ],
    typicalOutcomes: [
      'Consistent profile dimensional tolerances and surface quality',
      'Reduction of dead-cycle time by 15-25%',
      'Elimination of severe pipework vibration and hydraulic shock fatigue'
    ],
    icon: 'wrench'
  },
  {
    id: 'hydraulic-system-modernization',
    category: 'Modernization',
    title: 'Hydraulic System Modernization',
    shortDesc: 'Evaluation and upgrading of hydraulic systems with emphasis on performance, reliability, maintainability and operational safety.',
    fullDesc: 'Evaluation and upgrading of heavy industrial hydraulic systems with unwavering emphasis on operating performance, contamination tolerance, thermal stability, maintainability and operational safety.',
    focusAreas: [
      'Power pack re-engineering: variable displacement pumps and accumulator sizing',
      'Proportional & servo valve manifold retrofits with subplate standardization',
      'Fluid cleanliness management, kidney-loop filtration, and offline cooling',
      'Condition monitoring sensors for pressure, temperature, contamination, and flow'
    ],
    typicalOutcomes: [
      'Significant reduction in oil degradation and overheating issues',
      'Predictable actuator response and precise velocity profiles',
      'Leak-free flanged connections and reduced environmental hazard'
    ],
    icon: 'gauge'
  },
  {
    id: 'valve-modernization',
    category: 'Modernization',
    title: 'Valve Modernization',
    shortDesc: 'Engineering studies and modernization support for critical industrial valve systems including hydraulic actuation concepts and lifecycle improvements.',
    fullDesc: 'Engineering studies and modernization support for critical industrial valve systems including hydraulic and electro-hydraulic actuation concepts, fast-closure safety logic, and lifecycle improvements in arduous duty.',
    focusAreas: [
      'Heavy penstock valves, spherical valves, and butterfly turbine shutoff valves',
      'Descaling spray header control valves in steel hot strip mills',
      'Emergency trip systems (ETS) with spring-return hydraulic accumulators',
      'Sealing seat material upgrades for abrasive slurry and high-pressure differentials'
    ],
    typicalOutcomes: [
      'Fail-safe shutoff times verified within millisecond tolerances',
      'Extended valve seat operating life in erosive conditions',
      'Complete diagnostic feedback on valve stem travel and hydraulic thrust'
    ],
    icon: 'gauge'
  },

  // Industrial Technologies
  {
    id: 'inspection-measurement',
    category: 'Industrial Technologies',
    title: 'Inspection & Measurement',
    shortDesc: 'Evaluation of advanced inspection technologies that improve condition assessment, maintenance planning and asset reliability.',
    fullDesc: 'Evaluation of advanced inspection and measurement technologies that improve non-destructive condition assessment, real-time geometry tracking, predictive maintenance planning, and asset reliability.',
    focusAreas: [
      'Laser profile scanning and optical surface defect inspection',
      'Hydraulic oil condition sensors (particle count, moisture, dielectric constant)',
      'Ultrasonic wall thickness and high-temperature stress monitoring',
      'Vibration analysis integration on critical rotating drives and pumps'
    ],
    typicalOutcomes: [
      'Early fault detection weeks before catastrophic mechanical failure',
      'Transition from reactive firefighting to planned predictive maintenance',
      'Traceable digital inspection logs for plant quality audits'
    ],
    icon: 'cpu'
  },
  {
    id: 'automation-control',
    category: 'Industrial Technologies',
    title: 'Automation & Control',
    shortDesc: 'Support for automation initiatives that improve monitoring, operational efficiency and repeatability while integrating with existing plant infrastructure.',
    fullDesc: 'Support for plant automation initiatives that improve operational monitoring, safety interlocks, process repeatability, and throughput while seamlessly integrating with existing brownfield plant infrastructure.',
    focusAreas: [
      'PLC-to-hydraulic servo controller fieldbus integration (EtherCAT, Profinet)',
      'Custom recipe management and automatic cycle sequencing',
      'HMI modernization with intuitive alarm diagnostic screens',
      'Plant-level SCADA connectivity and historian telemetry'
    ],
    typicalOutcomes: [
      'Higher operator safety through comprehensive interlock diagnostics',
      'Standardized operating cycles reducing operator-induced variability',
      'Real-time visibility into machine availability and cycle performance'
    ],
    icon: 'cpu'
  },

  // Project Support
  {
    id: 'engineering-execution-support',
    category: 'Project Support',
    title: 'Engineering Execution Support',
    shortDesc: 'Technical coordination from concept through implementation with long-term engineering support.',
    fullDesc: 'Dedicated on-site and remote technical coordination from initial concept through engineering design, site fabrication oversight, erection, flushing, pressure testing, and commissioning.',
    focusAreas: [
      'Hydraulic piping fabrication, pickling, and oil flushing protocol supervision',
      'FAT (Factory Acceptance Testing) and SAT (Site Acceptance Testing) protocols',
      'Multi-vendor mechanical, electrical, and hydraulic interface coordination',
      'Safety and regulatory compliance verification during commissioning'
    ],
    typicalOutcomes: [
      'First-time right startup with pristine ISO 4406 fluid cleanliness targets',
      'Zero inter-vendor disputes regarding system responsibility',
      'Commissioning executed within planned shutdown schedules'
    ],
    icon: 'layers'
  },
  {
    id: 'lifecycle-support',
    category: 'Project Support',
    title: 'Lifecycle Support',
    shortDesc: 'Engineering assistance beyond commissioning through troubleshooting, modernization planning and continuous technical support.',
    fullDesc: 'Engineering assistance beyond commissioning through root-cause troubleshooting, fluid contamination management, maintenance training, modernization planning, and continuous technical support.',
    focusAreas: [
      'Root-cause failure analysis (RCFA) for repeat hydraulic/mechanical breakdowns',
      'Annual technical condition audits of high-pressure fluid power systems',
      'Maintenance team hands-on training on modern electro-hydraulic systems',
      'Spare parts rationalization and critical spares inventory planning'
    ],
    typicalOutcomes: [
      'Permanent elimination of chronic recurring breakdowns',
      'Empowered in-house plant maintenance crews capable of rapid diagnostics',
      'Optimized inventory capital tied up in replacement components'
    ],
    icon: 'refresh'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'steel-metals',
    title: 'Steel & Metals',
    index: '01',
    tagline: 'Modernization, hydraulic systems, extrusion press upgradation and process improvement for demanding production environments.',
    description: 'Heavy metallurgical manufacturing environments operate under punishing thermal gradients, high shock loads, severe scale contamination, and non-stop continuous duty. We provide specialized engineering for extrusion presses, hot rolling mills, descaling systems, and continuous casting hydraulics.',
    image: '/src/assets/images/steel_metals_facility_1792053324561.jpg',
    imageAlt: 'Steel and aluminum extrusion press facility with hydraulic cylinders',
    operatingConditions: [
      'Thermal cycles up to 1200°C adjacent to hydraulic lines',
      'Extreme abrasive mill scale and airborne dust contamination',
      'Repetitive high shock loads up to 350 bar during rolling and forging passes',
      'Continuous 24/7/365 production schedules where every hour of downtime is costly'
    ],
    challenges: [
      'Premature valve failure caused by scale ingress and oil overheating',
      'Uneven extrusion speed causing profile distortion and high scrap rates',
      'Uncontrolled hydraulic shock causing piping cracks and flange leaks',
      'Obsolescence of original OEM electronics and servo cards'
    ],
    solutions: [
      'Extrusion press hydraulic manifold modernization with high-response cartridge valves',
      'Main cylinder prefill valve retrofits and digital servo speed control',
      'High-pressure water descaling header valve redesign and accumulator dampening',
      'Heavy-duty cooling and continuous offline filtration systems'
    ]
  },
  {
    id: 'mining',
    title: 'Mining & Mineral Processing',
    index: '02',
    tagline: 'Slurry handling, ore beneficiation, pumping and filtration solutions for demanding mineral-processing environments.',
    description: 'Mining and mineral-processing operations demand reliable solutions for abrasive slurry, ore beneficiation, solid-liquid separation, dewatering and process-fluid handling. Mill Engineering combines application-focused engineering with specialised pumping, filtration, hydraulic and process technologies, including custom equipment upgrades and system modernisation.',
    image: '/src/assets/images/mining_mineral_plant_1792053324598.jpg',
    imageAlt: 'Mineral processing plant with slurry pumping, filtration and hydraulic equipment',
    operatingConditions: [
      'Highly abrasive slurry and mineral-laden process fluids',
      'Continuous-duty pumping, filtration and beneficiation processes',
      'High vibration, dust and demanding equipment operating environments',
      'Remote operating locations where reliability and maintainability are critical'
    ],
    challenges: [
      'Reliable handling of abrasive slurry and high-solids process streams',
      'Maintaining efficient solid-liquid separation and filtration performance',
      'Pump wear, hydraulic losses and reliability issues in demanding services',
      'Modernising existing process systems without unnecessary equipment replacement'
    ],
    solutions: [
      'Heavy-Duty Slurry & Process Pumping Solutions',
      'Slurry & Ore Beneficiation Solutions',
      'Filtration & Filter Cloth Solutions for mineral-processing applications',
      'Hydraulic Systems & Actuation for mining and process equipment',
      'Process Filtration & Fluid Management for critical plant circuits',
      'Pumping & Dewatering Systems for mine drainage, sump and transfer duties',
      'Equipment Upgradation & Modernisation for existing plant systems',
      'Measurement, Sensors & Condition Monitoring for equipment and process parameters',
      'Custom Engineering Solutions for challenging mining applications'
    ]
  },
  {
    id: 'hydropower',
    title: 'Hydropower',
    index: '03',
    tagline: 'Hydraulic system and valve modernization, inspection technologies and reliability engineering for hydro-mechanical assets.',
    description: 'Hydroelectric power generation requires absolute operational certainty and fail-safe safety mechanisms. We engineer and modernize governor hydraulic systems, main inlet valves (MIV), penstock guard valves, and spillway crest gate hydraulic hoists.',
    image: '/src/assets/images/hydropower_turbines_1792053326066.jpg',
    imageAlt: 'Hydropower turbine hall with penstock valves and hydraulic control systems',
    operatingConditions: [
      'Static water heads generating massive hydrostatic pressures up to 100+ bar',
      'Requirement for 100% fail-safe closure without external electric power',
      'Submerged or damp cavern environments with high humidity',
      'Asset design lifespans exceeding 30 to 50 years'
    ],
    challenges: [
      'Aging turbine governor oil units (OPU) with drifting proportional valves',
      'Main inlet valve spherical seat leakage causing water loss and safety concerns',
      'Slow emergency gate drop times risking runner runaway during trip events',
      'Difficulty sourcing obsolete mechanical spares for vintage hydro installations'
    ],
    solutions: [
      'Modern electro-hydraulic digital governor power packs with redundant pump circuits',
      'MIV hydraulic bypass and bi-directional seal pressurization modernization',
      'Weight-assisted gravity closure and nitrogen-charged emergency gate actuators',
      'Non-destructive testing and laser scanning for precise component replication'
    ]
  },
  {
    id: 'cement',
    title: 'Cement',
    index: '04',
    tagline: 'Engineering improvements and modernization for plants operating under continuous, abrasive conditions.',
    description: 'Cement manufacturing pushes machinery through high-dust grinding, intense rotary kiln thermal radiation, and continuous clinker transport. We evaluate and modernize high-pressure grinding roller (HPGR) hydraulics, kiln drive systems, and cooler grate actuators.',
    image: '/src/assets/images/cement_plant_facility_1792053362520.jpg',
    imageAlt: 'Modern cement grinding roller press and hydraulic power unit',
    operatingConditions: [
      'Highly pervasive clinker and raw meal dust particles (< 10 microns)',
      'Severe shock loads in roller presses from uncrushable tramp material',
      'Continuous operation with scheduled major maintenance only once per year',
      'Elevated ambient temperatures around calciner and kiln structures'
    ],
    challenges: [
      'HPGR floating roller skewing and uneven hydraulic gap pressure',
      'Fast-clogging hydraulic breather caps causing dust pull into reservoirs',
      'Clinker cooler hydraulic cylinder seal degradation from thermal radiation',
      'Frequent pump failure due to contaminated fluid operating at 180-250 bar'
    ],
    solutions: [
      'Rapid-response accumulator unloading circuits to protect HPGR roller bearings',
      'Hermetically sealed reservoir air bladders preventing clinker dust ingestion',
      'High-temperature Viton/PTFE seal packages for kiln and cooler cylinders',
      'Independent kidney-loop continuous conditioning systems'
    ]
  },
  {
    id: 'automotive',
    title: 'Automotive',
    index: '05',
    tagline: 'Automation, precision and process reliability engineering for modern manufacturing environments.',
    description: 'Automotive stamping, body-in-white hydroforming, and component manufacturing require rapid cycle times, sub-millimeter positioning accuracy, and virtually zero unplanned downtime on synchronized production lines.',
    image: '/src/assets/images/automotive_press_line_1792053362051.jpg',
    imageAlt: 'Modern automotive stamping press line with precision hydraulic systems',
    operatingConditions: [
      'High cycle frequencies (20-40 strokes per minute on stamping presses)',
      'Tight sheet metal drawing tolerances requiring repeatable tonnage curves',
      'Strict environmental noise and energy consumption regulations',
      'Integration with robotic destackers, transfers, and safety light curtains'
    ],
    challenges: [
      'Die cushion hydraulic pressure fluctuations causing wrinkles or tears in stampings',
      'Energy waste and heat generation during idle or holding phases of the press cycle',
      'Hydraulic oil mist and valve manifold leakage on clean factory floors',
      'Slow troubleshooting during intermittent servo valve or sensor trips'
    ],
    solutions: [
      'Servo-motor driven pump systems (servo-hydraulics) saving up to 50% electrical energy',
      'Multi-point active hydraulic die cushion modernizations with digital profile control',
      'O-ring flange SAE code 62 manifold upgrades eliminating chronic joint leaks',
      'Intuitive touchscreen diagnostics displaying real-time pressure-time stamping curves'
    ]
  }
];

export const ENGINEERING_PROCESS = [
  {
    step: 1,
    title: 'Understand',
    summary: 'Listen to the operating context before proposing anything.',
    detail: 'We interview plant managers, maintenance engineers, and operators to comprehend the real operating environment, duty cycles, and underlying root issues rather than symptoms.'
  },
  {
    step: 2,
    title: 'Study',
    summary: 'Study operating conditions, constraints and performance objectives.',
    detail: 'Detailed review of hydraulic circuit schematics, mechanical stress loads, contamination levels, thermal constraints, and shutdown window boundaries.'
  },
  {
    step: 3,
    title: 'Evaluate',
    summary: 'Evaluate technologies and alternatives objectively.',
    detail: 'Unbiased assessment of competing technologies (electro-hydraulic, servo-electric, proportional vs. digital cartridge) on pure engineering merit and lifecycle economics.'
  },
  {
    step: 4,
    title: 'Identify',
    summary: 'Identify the engineering approach that fits the application.',
    detail: 'Pinpointing the exact modernization, upgrade, or replacement solution that delivers maximum reliability without paying for unnecessary complexity.'
  },
  {
    step: 5,
    title: 'Engineer',
    summary: 'Engineer the solution with attention to reliability and lifecycle value.',
    detail: 'Detailed engineering drawings, manifold design, sizing calculations, component selection, safety logic, and Bill of Materials preparation.'
  },
  {
    step: 6,
    title: 'Execute',
    summary: 'Support execution with technical coordination.',
    detail: 'On-site engineering oversight during equipment arrival, manifold mounting, precision piping installation, pickling, flushing, and phased commissioning.'
  },
  {
    step: 7,
    title: 'Support',
    summary: 'Remain available throughout the asset lifecycle.',
    detail: 'Long-term engineering availability for fine-tuning, maintenance coaching, fluid condition monitoring, and periodic performance health-checks.'
  }
];

export const WHY_MILL_ENGINEERING = [
  {
    title: 'Engineering-first thinking',
    desc: 'We are engineering professionals first, not equipment salesmen. Our recommendations are grounded in mechanical and hydraulic first principles.'
  },
  {
    title: 'Application-focused recommendations',
    desc: 'No generic catalog pushes. Every proposal is formulated specifically for your exact operating duty, fluid media, and plant conditions.'
  },
  {
    title: 'Technology evaluation before selection',
    desc: 'We objectively evaluate alternative technologies side-by-side to ensure the selected path genuinely solves the root operational problem.'
  },
  {
    title: 'Practical modernization',
    desc: 'Targeted retrofits and upgrades that extract renewed performance from existing capital equipment, avoiding costly wholesale replacement.'
  },
  {
    title: 'Long-term engineering support',
    desc: 'We remain invested in your plant performance long after commissioning, providing root cause analysis and continuous technical advisory.'
  },
  {
    title: 'Focus on reliability & lifecycle value',
    desc: 'Engineered for maintainability, leak prevention, fluid cleanliness, and extended Mean Time Between Failures (MTBF).'
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Understanding Modernization Readiness',
    type: 'Engineering Notes',
    description: 'A structured engineering framework for evaluating whether existing industrial presses, hydraulic power packs, and valve systems are viable candidates for modernization versus replacement.',
    readTime: '8 min read',
    topics: ['Modernization', 'Asset Integrity', 'Feasibility']
  },
  {
    id: 'res-2',
    title: 'Hydraulic System Modernization Overview',
    type: 'Technical Brochure',
    description: 'An overview of our systematic approach to industrial hydraulic evaluation, cartridge manifold design, digital servo retrofits, and contamination control protocols.',
    readTime: '12 pages',
    topics: ['Hydraulics', 'Retrofit', 'Manifolds']
  },
  {
    id: 'res-3',
    title: 'Frequently Asked Questions',
    type: 'FAQ',
    description: 'Comprehensive answers to common questions regarding engineering advisory, technology evaluation, on-site commissioning support, and vendor independence.',
    readTime: '6 min read',
    topics: ['FAQ', 'Process', 'Advisory']
  },
  {
    id: 'res-4',
    title: 'Inspection Technology Considerations',
    type: 'Engineering Notes',
    description: 'What plant reliability engineers must evaluate when selecting non-contact laser measurement, ultrasonic sensors, and continuous fluid condition monitoring technologies.',
    readTime: '7 min read',
    topics: ['Inspection', 'Sensors', 'Predictive Maintenance']
  },
  {
    id: 'res-5',
    title: 'Mill Engineering Corporate Profile',
    type: 'Download',
    description: 'Comprehensive overview of Mill Engineering, core capabilities, supported heavy industries, technical team background, and partnership philosophy.',
    readTime: '16 pages PDF',
    topics: ['Company Profile', 'Overview', 'Capabilities']
  },
  {
    id: 'res-6',
    title: 'Case Studies: Heavy Industrial Modernization',
    type: 'Coming Soon',
    description: 'Real-world engineering case studies detailing extrusion press hydraulic cycle reduction, hydropower valve modernization, and mining slurry actuation retrofits.',
    readTime: 'Coming Q3 2026',
    topics: ['Case Studies', 'Extrusion', 'Hydropower']
  }
];

export const OFFICE_INFO = {
  name: 'Mill Engineering',
  tagline: 'Engineering Begins With Understanding.',
  companyType: 'Engineering Solutions Company',
  address: {
    line1: 'TOF-04, 3rd Floor, Surya Treasure Island',
    line2: 'Junwani, Bhilai, Chhattisgarh',
    pin: '490020',
    country: 'India'
  },
  phoneNumbers: [
    { display: '+91 90398 99917', raw: '+919039899917' },
    { display: '+91 91744 70010', raw: '+919174470010' }
  ],
  email: 'mill.eng@outlook.com',
  website: 'www.milleng.in',
  responseCommitment: 'We aim to respond to every technical enquiry within one business day.'
};
