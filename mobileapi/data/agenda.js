var baseagenda = {
sessions: [
    {
        id: "reg1",
        type: "break",
        title: "Registration",
        speaker: [],
        abstract: "",
        start: new Date(2013,2,12,08,30),
        end: new Date(2013,02,12,09,00),
        location: "lobby"
    },
    {
        id: "t1t01a",
        type: "tutorial",
        title: "WSO2 Enterprise Integration Platform: ESB and More",
        speaker: ["paul@wso2.com", "kasun@wso2.com"],
        abstract: "<p>Business success requires seamless information and event flow across departments, customers, partners, and systems. Heterogeneous message formats, protocols, identity tokens, and high message volumes often challenge integration teams. As teams scale Service-Oriented Architecture (SOA) principles of sharing, re-use, and loose coupling across integration participants and interconnect integration endpoints, an enterprise integration blueprint should include a robust and high-performance Enterprise Integration Platform. The Enterprise Service Bus is a core of this platform, enabling interconnection, mediation, management and transformation. Additionally, Registry, Message Broker and Data Services components provide a solid foundation for a best-practice based and scalable integration approach.</p><p>In the WSO2 Enterprise Integration Platform tutorial, Kasun and Paul will describe a best-practice integration approach using WSO2 components, advanced patterns, and new technologies. They will explain how to link applications, services, and APIs using:</p><ul><li>Cloud connectors and a cloud connector architecture</li><li>Enterprise Integration Patterns (EIP)</li><li>High Performance with Pass-Thru transport</li><li>REST mediation and transformation</li><li>JSON handling</li><li>Asynchronous processing and Event Driven Architecture with Message Broker</li><li>Service monitoring</li><li>Legacy systems adapters into SAP/R3, PeopleSoft and others</li></ul>",
        start: new Date(2013,02,12,09,00),
        end: new Date(2013,02,12,10,30),
        location: "T1"
    },
    {
        id: "t2t01a",
        type: "tutorial",
        title: "API Management 101",
        speaker: ["sumedha@wso2.com", "sanjeewa@wso2.com"],
        abstract: "<p>Many development teams today develop & publish services, yet struggle to create a service architecture that is widely shared, reused and adopted across internal and external development teams. Instead of creating consistent service architecture and demonstrating service re-use, teams inadvertently produce Just a Bunch of Web Services or Just a Bunch of REST Services.</p><p>In this tutorial session, Sumedha and Sanjeewa will describe how to include API management as a strategic component within your Service Oriented Architecture initiative. The session will pragmatically demonstrate how to use WSO2 API Manager to convert your existing services into promoted, documented, and secured managed API, which gain consumer adoption. You will learn the following API management basics:</p><ul><li>API creation, publishing & lifecycle management</li><li>Subscription management</li><li>Managing API access, authorization & throttling</li><li>Monitoring API usage via statistics</li><li>Deploying for scalability</li></ul>",
        start: new Date(2013,02,12,09,00),
        end: new Date(2013,02,12,10,30),
        location: "T2"
    },
    {
        id: "t3t01a",
        type: "tutorial",
        title: "Governance from Soup to Nuts",
        speaker: ["senaka@wso2.com", "isabelle@wso2.com"],
        abstract: "<p>Many teams desire rapid service development, improved service visibility, efficient service deployment, and effective policy enforcement. In this governance tutorial, Senaka and Isabelle will describe best-practice development and deployment techniques that you may utilize to build applications and services. You will learn how WSO2 Developer Studio can accelerate your development, and how WSO2 Composite Application (C-App) minimize efforts to deploy applications and services across development, quality assurance, and production environments. The tutorial will illustrate how the WSO2 Governance Registry manages services endpoints and configuration data across run-time environments.</p><p>Participants will obtain a virtual machine containing all installed products installed and a step-by-step instruction guide. Familiarity with Maven and Eclipse are recommended to attend this tutorial.</p>",
        start: new Date(2013,02,12,09,00),
        end: new Date(2013,02,12,10,30),
        location: "T3"
    },
    {
        id: "break0",
        type: "break",
        title: "Break",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,12,10,30),
        end: new Date(2013,02,12,11,00),
        location: "none"
    },
    {
        id: "t1t01b",
        type: "tutorial",
        title: "WSO2 Enterprise Integration Platform: ESB and More (cont.)",
        speaker: ["paul@wso2.com", "kasun@wso2.com"],
        abstract: "<p>Continuation of <a href='#session?t1t01a'>WSO2 Enterprise Integration Platform: ESB and More</a></p>",
        start: new Date(2013,02,12,11,00),
        end: new Date(2013,02,12,12,30),
        location: "T1"
    },
    {
        id: "t2t01b",
        type: "tutorial",
        title: "API Management 101 (cont.)",
        speaker: ["sumedha@wso2.com", "sanjeewa@wso2.com"],
        abstract: "<p>Continuation of <a href='#session?t2t01a'>API Management 101</a></p>",
        start: new Date(2013,02,12,11,00),
        end: new Date(2013,02,12,12,30),
        location: "T2"
    },
    {
        id: "t3t01c",
        type: "tutorial",
        title: "Governance from Soup to Nuts (cont.)",
        speaker: ["senaka@wso2.com", "isabelle@wso2.com"],
        abstract: "<p>Continuation of <a href='#session?t3t01a'>Governance from Soup to Nuts</a></p>",
        start: new Date(2013,02,12,11,00),
        end: new Date(2013,02,12,12,30),
        location: "T3"
    },
    {
        id: "lunch1",
        type: "break",
        title: "Lunch",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,12,12,30),
        end: new Date(2013,02,12,13,30),
        location: "none"
    },
    {
        id: "t1t02a",
        type: "tutorial",
        title: "Enterprise Security & Identity Management with WSO2 Identity Server",
        speaker: ["prabath@wso2.com", "hasini@wso2.com"],
        abstract: "<p>Since business assets are commonly exposed and accessed across organizational boundaries, designing a secure identity and access management solution is increasingly challenging. IT teams must guarantee secure access across multiple domains, manage user-identity and access control across on-premise and cloud applications, and address flexibility, interoperability, and performance requirements. Although numerous technologies and standards exist to address different requirements, choosing the correct option in a pool of industry buzzwords is not easy.</p><p>During this tutorial, you will learn enterprise security and identity management core concepts, technologies and standards, and implementation best practices.</p><p>Prabath and Hasini will walk you through real world use cases implemented with WSO2 Identity Server and explain across XACML, SAML2 SSO, OAuth, OpenID, SCIM specification support.</p><p>You will gain a practical understanding of how to design a secured solution using leading open source enterprise identity and access management infrastructure components, technologies, and best practices.</p>",
        start: new Date(2013,02,12,13,30),
        end: new Date(2013,02,12,15,00),
        location: "T1"
    },
    {
        id: "t2t02a",
        type: "tutorial",
        title: "Private PaaS for the Enterprise: WSO2 Stratos & WSO2 App Factory",
        speaker: ["shankar@wso2.com", "amilam@wso2.com"],
        abstract: "<p>Development and operation teams desire to collaboratively design, develop, and deploy applications and services. Achieving an on-demand development and run-time environment requires transforming infrastructure and automating processes. By integrating cloud middleware platforms with software development lifecycle automation, teams can accelerate platform access, reduce server instances, and apply best-practice architectural templates and methodologies.</p><p>In this tutorial, Shankar and Amila will describe how introducing the Cloud-native WSO2 Stratos platform into your Private PaaS environment will help you achieve Cloud cost savings, security, control, and service level management. By combining the WSO2 Stratos PaaS run-time environment with WSO2 App Factory development environment, teams can streamline application delivery processes and enforce application governance. WSO2 App Factory provisions Cloud server instances, software development life-cycle (SDLC) tools, and application resources within development, test, and production environments.</p><p>In this tutorial session, you will learn how to enable an agile, on-demand application development environment that helps you transform your business IT processes. The tutorial will introduce the following topics.</p><ul><li>What is PaaS, and why deploy a Private PaaS?</li><li>WSO2 Stratos high-level architecture</li><li>Writing applications for WSO2 Stratos</li><li>Application development challenges in Enterprises</li><li>Transforming software development life-cycle infrastructure and governance</li><li>Best-practices to manage the application development lifecycle</li>",
        start: new Date(2013,02,12,13,30),
        end: new Date(2013,02,12,15,00),
        location: "T2"
    },
    {
        id: "t3t02a",
        type: "tutorial",
        title: "Building Composite Enterprise Applications with WSO2 Developer Studio",
        speaker: ["harshana@wso2.com", "samisa@wso2.com"],
        abstract: "<p>TBD</p>",
        start: new Date(2013,02,12,13,30),
        end: new Date(2013,02,12,15,00),
        location: "T3"
    },
    {
        id: "t1t02b",
        type: "tutorial",
        title: "Enterprise Security & Identity Management with WSO2 Identity Server (cont.)",
        speaker: ["prabath@wso2.com", "hasini@wso2.com"],
        abstract: "<p>Continuation of <a href='#session?t1t02a'>Enterprise Security & Identity Management with WSO2 Identity Server</a></p>",
        start: new Date(2013,02,12,15,30),
        end: new Date(2013,02,12,17,00),
        location: "T1"
    },
    {
        id: "t2t02b",
        type: "tutorial",
        title: "Private PaaS for the Enterprise: WSO2 Stratos & WSO2 App Factory (cont.)",
        speaker: ["shankar@wso2.com", "amilam@wso2.com"],
        abstract: "<p>Continuation of <a href='#session?t2t02a'>Private PaaS for the Enterprise: WSO2 Stratos & WSO2 App Factory</a></p>",
        start: new Date(2013,02,12,15,30),
        end: new Date(2013,02,12,17,00),
        location: "T2"
    },
    {
        id: "t3t02b",
        type: "tutorial",
        title: "Building Composite Enterprise Applications with WSO2 Developer Studio (cont.)",
        speaker: ["harshana@wso2.com", "samisa@wso2.com"],
        abstract: "<p>Continuation of <a href='#session?t3t02a'>Building Composite Enterprise Applications with WSO2 Developer Studio</a></p>",
        start: new Date(2013,02,12,15,30),
        end: new Date(2013,02,12,17,00),
        location: "T3"
    },

    {
        id: "reg2",
        type: "break",
        title: "Registration",
        speaker: [],
        abstract: "",
        start: new Date(2013,2,13,08,30),
        end: new Date(2013,02,13,09,00),
        location: "lobby"
    },
    {
        id: "opening",
        type: "session",
        title: "Opening",
        speaker: [],
        abstract: "Opening Address",
        start: new Date(2013,2,13,09,00),
        end: new Date(2013,02,13,09,15),
        location: "main"
    },
    {
        id: "keynote1",
        type: "keynote",
        title: "Welcome Keynote",
        speaker: ["sanjiva@wso2.com"],
        abstract: "TBD",
        start: new Date(2013,02,13,09,15),
        end: new Date(2013,02,13,09,45),
        location: "main"
    },
    {
        id: "keynote2",
        type: "keynote",
        title: "Democratizing Innovation in Computing",
        speaker: ["tbd@wso2.com"],
        abstract: "<p>Over the last decade, access to high-performance, cost-effective SoCs has often been restricted to those customers able to plausibly guarantee seven- or eight-digit shipment volumes. This scale advantage has favored incumbents over new entrants, and has suppressed innovation in the consumer electronics and mobile sectors. Devices such as Raspberry Pi, which package high-performance SoCs in an affordable, easy to integrate form factor, make it much easier for even small organizations to compete in these sectors.</p>",
        start: new Date(2013,02,13,09,45),
        end: new Date(2013,02,13,10,30),
        location: "main"
    },
    {
        id: "break2",
        type: "break",
        title: "Break",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,13,10,30),
        end: new Date(2013,02,13,11,00),
        location: "main"
    },
    {
        id: "t1s01",
        type: "session",
        title: "API and Service Orientation @StubHub",
        speaker: ["phiroze@stubhub.com"],
        abstract: "TBD",
        start: new Date(2013,02,13,11,00),
        end: new Date(2013,02,13,11,30),
        location: "T1"
    },
    {
        id: "t2s01",
        type: "session",
        title: "Strategic Insurance Integration Platform @ Suva",
        speaker: ["igor.berchtold@suva.ch"],
        abstract: "<p>Suva is more than just an insurance company; Suva combines prevention, insurance and rehabilitation to protect policyholders. To provide holistic care for policyholders, Suva uses WSO2 ESB as strategic and central integration platform for Web Service interactions between core Oracle Weblogic Server, Oracle Tuxedo, SAP ERP and extranet Web Service platforms. The integration platform de-couples service provider and consumer using proxy endpoints, security, message mediation, queuing, and adapters.</p><p>The platform delivers secure identity and entitlement assertion using SAML Sender Voucher Assertion for SAP, WS-Security and assertion ticket for user propagation. To scale up to more than 2 million calls per month, the systems architecture contains multiple ESB deployment zones and a fault-tolerance topology configuration.</p><p>In this session, Igor will describe integration platform architecture, security mediation techniques, ESB artifact deployment best practices and experience using WSO2 support services.</p>",
        start: new Date(2013,02,13,11,00),
        end: new Date(2013,02,13,11,30),
        location: "T2"
    },
    {
        id: "t1s02",
        type: "session",
        title: "The Spanish Language API Platform",
        speaker: ["ealvarez@molinodeideas.es"],
        abstract: "TBD",
        start: new Date(2013,02,13,11,30),
        end: new Date(2013,02,13,12,00),
        location: "T1"
    },
    {
        id: "t2s02",
        type: "session",
        title: "Case Study: SOAS University of London Student Enrollment Portal On WS02",
        speaker: ["charles.gibbons@jiscadvance.ac.uk"],
        abstract: "TBD",
        start: new Date(2013,02,13,11,30),
        end: new Date(2013,02,13,12,00),
        location: "T2"
    },
    {
        id: "t1s03",
        type: "session",
        title: "Expanding your Business with APIs",
        speaker: ["sumedha@wso2.com"],
        abstract: "TBD",
        start: new Date(2013,02,13,12,00),
        end: new Date(2013,02,13,12,30),
        location: "T1"
    },
    {
        id: "t2s03",
        type: "session",
        title: "How WSO2 helped the Dutch Ministry of Infrastructure and the Environment save Euro 500K and deliver SOA solutions faster",
        speaker: ["stephen", "thijs.volders@yenlo.nl"],
        abstract: "<p>A team is creating a 'System of Base Registries' to share information. The driver behind the base registries is cost reduction and reduced administrative burden. Like many government organizations, Dutch Ministry of Infrastructure and Envrionment (IenM) is facing huge challenges. It needs to do more with less people while at the same time deliver higher quality at lower costs. To achieve their goals, the IenM needs to improve the reusability, flexibility and scalability of solutions.</p><p>In a joint presentation the Ministry of Infrastructure and the Environment and Yenlo, business partner of WSO2 for the Benelux, explore how WSO2 provides an ideal solution for government organizations to reduce costs, improve efficiency and share solutions with other government organizations.</p><p>Topics include:</p><ul><li>Strategic reasons for choosing WSO2 as the preferred enterprise integration platform.</li><li>How WSO2 Enterprise Service Bus (ESB), WSO2 Business Activity Monitor (BAM) and WSO2 Governance Registry (G-Reg) are used.</li><li>The role of open standards and open source.</li><li>Extending the WSO2 ESB with the open source ebMS connector.</li><li>Vision how the WSO2 platform will play a crucial role in reducing costs, complexity and time to market delivering solutions.</li><li>Production experience and lessons learnt.</li></ul>",
        start: new Date(2013,02,13,12,00),
        end: new Date(2013,02,13,12,30),
        location: "T2"
    },
    {
        id: "lunch2",
        type: "break",
        title: "Lunch",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,13,12,30),
        end: new Date(2013,02,13,13,30),
        location: "none"
    },
    {
        id: "t1s04",
        type: "session",
        title: "Promoting Service Re-use with the WSO2 API Management Platform",
        speaker: ["chris@wso2.com"],
        abstract: "<p>API management is a strategic component within your Service Oriented Architecture initiative. Many development teams publish services, yet struggle to create a service architecture that is widely shared, re-used, and adopted across internal development teams. SOA governance programs often fall far short of encouraging consumer adoption, tracking service consumption, and illustrating business value. Too often, there is little or no insight into:</p><ul><li>How to enable business functionality as an API.</li><li>Who is writing re-usable APIs and services.</li><li>Who is consuming APIs and services.</li><li>How APIs and services are being used.</li><p>In this session Chris will describe benefits gained by:</p><ul><li>Publishing managed APIs for consumption within your organization.</li><li>Establishing API manager and publisher roles to foster API adoption.</li><li>Extending the service governance registry to encourage cross-team (or cross-department) communication, coordination and collaboration.</li><li>Overcoming common SOA anti-patterns of ‘Not Invented Here’ (NIH) and ‘Build, and Build Again’ by using an API Store.</li><li>Following an API roadmap focused on increasing service re-use and enhancing IT business value.</li></ul>",
        start: new Date(2013,02,13,13,30),
        end: new Date(2013,02,13,14,00),
        location: "T1"
    },
    {
        id: "t2s04",
        type: "session",
        title: "WSO2 Carbon Product Performance and Deployment Topology Sizing",
        speaker: ["asankaa@wso2.com"],
        abstract: "<p>Performance is a key constraint limiting business transaction processing volume, transaction responsiveness, and an application solution’s ability to fulfill SLAs (Service Level Agreements). Both consumer and partner facing applications often must process large transaction volumes with high throughput and low latency. Architecture and deployment topology significantly impacts whether an application or service solution will meet business transaction processing goals.</p><p>During this session Asanka Abeysinghe, Director of Solutions Architecture at WSO2 will describe WSO2 Middleware product performance, a capacity planning matrix, capacity planning processes, and how to build a deployment architecture. Asanka will discuss:</p><ul><li>Why the WSO2 platform architecture creates a high performance and scalable middleware platform</li><li>What design principles and product composition sets (including WSO2 ESB, WSO2 Message Broker, WSO2 BAM and WSO2 CEP) will deliver highly scalable and available solutions</li><li>How to build your deployment architecture by identifying the correct deployment patterns and reference architecture</li><li>How to gauge solution performance and scale by performing capacity planning to identify the number of server instances required for your enterprise deployment, required hardware/virtualization infrastructure, and infrastructure provisioning requirements by using tested facts instead of traditional sizing assumptions.</li></ul>",
        start: new Date(2013,02,13,13,30),
        end: new Date(2013,02,13,14,00),
        location: "T2"
    },
    {
        id: "t1s05",
        type: "session",
        title: "Enterprise Identity Management and Security with WSO2 Identity Server",
        speaker: ["prabath@wso2.com"],
        abstract: "TBD",
        start: new Date(2013,02,13,14,00),
        end: new Date(2013,02,13,14,30),
        location: "T1"
    },
    {
        id: "t2s05",
        type: "session",
        title: "WSO2 Carbon 4.0.0 Kernel Design and Architecture",
        speaker: ["sameera@wso2.com"],
        abstract: "<p>WSO2 Carbon is an innovative enterprise middleware platform, which allows you to transform your development and operational processes. The latest Carbon platform release (4.0.0) introduces revolutionary kernel architecture modifications. The modifications improve Tomcat 7.0 compatibility, enhance Cloud efficiency, introduce DevOps best practices, and reduce application deployment footprint.</p><p>During this session, Sameera will describe the WSO2 Carbon kernel design, architecture, and feature set. He will explain how WSO2 Carbon kernel delivers better integration with Tomcat 7.0, multi-tenancy, self-service provisioning, cluster management, lazy loading, and deployment synchronization.</p>",
        start: new Date(2013,02,13,14,00),
        end: new Date(2013,02,13,14,30),
        location: "T2"
    },
    {
        id: "t1s06",
        type: "session",
        title: "WSO2 as a Cryptographic Services Platform",
        speaker: ["roger.carhuatocto@konosys.es"],
        abstract: "<p>As Internet transactions increase in value, the opportunity to intercept, hijack, and maliciously modify messages grows. While the OASIS Digital Signature Service Standard has existed for five years, protecting transactions using the standard is often difficult. A Cryptographic Services Platform delivers a service set assuring integrity, authenticity and confidentiality of transactions over the Internet.</p><p>In this session, Roger will present a the construction of a cryptographic services platform using WSO2 middleware, and how the platform delivers security mediation between a Liferay Portal and a Certification Authority or Crypto Service Provider.</p>",
        start: new Date(2013,02,13,14,30),
        end: new Date(2013,02,13,15,00),
        location: "T1"
    },
    {
        id: "t2s06",
        type: "session",
        title: "Running Operations for Carbon and Stratos",
        speaker: ["chamith@wso2.com"],
        abstract: "<p>Application and service users expect reliable access and fast response times. When building operational infrastructure supporting high availability, scalability, and robust monitoring, outdated tooling and architecture often reduce DevOps team effectiveness. The WSO2 Carbon enterprise middleware platform and WSO2 Stratos Cloud middleware platform encourages DevOps best practices across:</p><ul><li>Deployment automation</li><li>Maintenance</li><li>Monitoring and alerting</li><li>Backups and DR</li><li>Scaling/bursting into the cloud</li><li>High Availability for services</li></ul><p>During this session, Chamith will describe how to painlessly run operations with Carbon and Stratos and explore best-practices used to deploy and manage a failure-proof large service clusters.</p>",
        start: new Date(2013,02,13,14,30),
        end: new Date(2013,02,13,15,00),
        location: "T2"
    },
    {
        id: "break4",
        type: "break",
        title: "Break",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,13,15,00),
        end: new Date(2013,02,13,15,30),
        location: "main"
    },
    {
        id: "t1s07",
        type: "session",
        title: "Integrating Telecom Big Data: Challenges and Lessons Learned",
        speaker: ["fabiolas@algartelecom.com.br"],
        abstract: "<p>Telecom industry operations generate Big Data and complex, contextual information flows. Algar Telecom’s goal is to easily integrate Big Data with enterprise data, conduct deep analytics on the combined data set, and deliver value-added services to telecom customers. This project constructs a dynamic service composition platform enabling customers to combine telecom services (e.g. send SMS, text to speech, read RSS feed, receive call, send email) into complex automated interactions. For example, 'when I receive an e-mail, send me a short message'.</p><p>To derive real business value and build services from Big Data events, the right tools are required to capture and organize a wide variety of data types from different sources, and to be able to easily analyze data in context. In this session, Fabiola Pereria will share Algar’s first experience with WSO2 ESB, WSO2 BAM, Hadoop, Cassandra, Memcached, and Scribe. Fabiola will also share how their use cases are evolving as they collect statistics, how Algar bridges Big data with enterprise data, and delivers business value.</p>",
        start: new Date(2013,02,13,15,30),
        end: new Date(2013,02,13,16,00),
        location: "T1"
    },
    {
        id: "t2s07",
        type: "session",
        title: "Developing innovative telecommunication products by transforming Business and Operational service platforms",
        speaker: ["Neeraj.Satija@2degreesmobile.co.nz"],
        abstract: "<p>Telecommunications industry is a competitive and technologically challenging domain. Telecom operators are challenged by dwindling voice and data revenue streams, level playing field regulations, and commoditized product offerings. Successful Telecom operators provide innovative products and services that go beyond traditional voice, data and text offerings. To achieve service innovation, operators must significantly transform their Business Support System and Operational Support System platforms. In this session, Neeraj will describe a product development transformation, which utilizes WSO2 middleware products and rapid development to produce timely, disruptive product innovation.</p>",
        start: new Date(2013,02,13,15,30),
        end: new Date(2013,02,13,16,00),
        location: "T2"
    },
    {
        id: "t1s08",
        type: "session",
        title: "Building self-managing system using WSO2 BAM and WSO2 CEP",
        speaker: ["prajod.vettiyattil@wipro.com"],
        abstract: "<p>IT teams desire low-maintenance solutions that will automatically match business demand. As solutions traffic scales, managing availability and performance becomes increasingly time consuming. Autonomic computing techniques create a self-managing environment where data center operations can be automated and high scalability achieved at a lower cost. In this session, Prajod will explain how a proof of technology was implemented using two WSO2 products: WSO2 BAM and WSO2 CEP. The solution involves capturing message traffic data using agents (sensors), learning about the major traffic pathways, using data from message flow statistics to predict potential server issues, and taking appropriate pre-emptive measures (using effectors). The solution remains performance and availability without operator intervention, or with minimal guidance from operators.</p>",
        start: new Date(2013,02,13,16,00),
        end: new Date(2013,02,13,16,30),
        location: "T1"
    },
    {
        id: "t2s08",
        type: "session",
        title: "Banking on the WSO2 Platform to build a SOA strategy",
        speaker: ["djusto@bip.b.br"],
        abstract: "<p>Our Brazilian Bank, Banco Idusval & Partners, participates in real-time electronic fund transfers with the central bank, uses several internal core systems, and delivers an Internet Banking portal to direct customers. In early 2011, we embarked upon an ambitious strategy to integrate all systems, develop a new Internet Banking Application, select new integration infrastructure, deploy core-banking service, and enable new business scenarios.</p><p>The Bank chose to follow a Service Oriented Architecture (SOA), decouple presentation from services, lower cost of ownership, and deliver successful results within one-year.</p><p>In this session, Diogenes Adriano Rizotto Justo will describe the SOA platform selection process, WSO2 product challenges and benefits experienced, security issue resolution, and successful production deployment.</p>",
        start: new Date(2013,02,13,16,00),
        end: new Date(2013,02,13,16,30),
        location: "T2"
    },
    {
        id: "t1s09",
        type: "session",
        title: "Enabling a Data-driven Agile Business",
        speaker: ["tharindu@wso2.com"],
        abstract: "<p>Emails, social networks, apps: These are a few ways users interact with organizations everyday. By analyzing these interactions, you can answer a few golden questions. Some of these are:</p><ul><li>Why are users using my product?</li><li>Why are users going away from my product?</li><li>What will keep them coming back?</li></ul><p>Spread sheets, server logs, JSON messages, OS metrics: Analyzing data coming from these source can answer various questions from the perspective of sales or techOps. Some of these are:</p><ul><li>What APIs are most popular among external developers?</li><li>What is my server up time?</li><li>How many leads I get out of webinars?</li></ul><p>In this talk Tharindu focuses on how we use the latest breed of WSO2 Analytics solutions to get the most out of your data. The talk will touch on:</p><ul><li>Connecting all your data together</li><li>Making your own custom metrics</li><li>Knowing when things go wrong in real time</li><li>Recognize long term trends in your data</li>",
        start: new Date(2013,02,13,16,30),
        end: new Date(2013,02,13,17,00),
        location: "T1"
    },
    {
        id: "t2s09",
        type: "session",
        title: "SOA that works",
        speaker: ["alberto.lagna@biznology.it"],
        abstract: "<p>Developing a complex system that integrates many external services is not just a matter of choosing the right technology, but requires also to properly the technology. This session will present two SOA systems that have been successfully deployed into production during the last year. The first system deliver an electronic health record (EHR) that integrates distributed data sources hosted across multiple vendors and technology platforms. The EHR system collects heterogeneous information, normalizes data, and publishes a composite record as a single service. The second system delivers an accounting system, based on a BPM engine, which integrates a large ecosystem of legacy preexisting data sources. The projects represent a SOA that works. In this session, Alberto will describe lessons learned and patterns while using the WSO2 middleware platform. He will explain how the team properly designed service interface, crafted business object exchange, factored services, versioned services, and monitored the run-time environment.</p>",
        start: new Date(2013,02,13,16,30),
        end: new Date(2013,02,13,17,00),
        location: "T2"
    },
    {
        id: "networking",
        type: "event",
        title: "Networking Reception - Sponsored by Yenlo",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,13,17,30),
        end: new Date(2013,02,13,20,00),
        location: "main"
    },
    {
        id: "bof1",
        type: "bof",
        title: "BOF - WSO2 Carbon",
        speaker: ["pradeep@wso2.com"],
        abstract: "",
        start: new Date(2013,02,13,19,00),
        end: new Date(2013,02,13,20,00),
        location: "tbd"
    },
    {
        id: "bof2",
        type: "bof",
        title: "BOF - WSO2 Stratos",
        speaker: ["damitha@wso2.com"],
        abstract: "",
        start: new Date(2013,02,13,19,00),
        end: new Date(2013,02,13,20,00),
        location: "tbd"
    },

    {
        id: "reg3",
        type: "break",
        title: "Registration",
        speaker: [],
        abstract: "",
        start: new Date(2013,2,14,08,30),
        end: new Date(2013,02,14,09,00),
        location: "lobby"
    },
    {
        id: "keynote3",
        type: "keynote",
        title: "How Open Source Can Still Save The World",
        speaker: ["brian"],
        abstract: "",
        start: new Date(2013,2,14,09,00),
        end: new Date(2013,02,14,09,45),
        location: "main"
    },
    {
        id: "keynote4",
        type: "keynote",
        title: "Network-embedded Application and Cloud Platforms: Emerging Foundations of Next-Generation Business Systems",
        speaker: ["pankaj"],
        abstract: "<p>A paradigm shift is happening - the network is moving beyond packet transport, voice-over-IP, video, collaboration. Application Infrastructure and Cloud Platform capabilities are now embedded everywhere - in the Cloud network, in the Data Center network, in the Mobile and Edge network - making cloud and application services ubiquitously available. Next generation business systems across industries involving machines, devices and industry-wide business processes are exploiting this to open new frontiers of business applications and systems. Enter the world of the Network as a Platform for Business Systems. From Healthcare to Financial Services to Manufacturing to Government, every Industry is tapping into ever-present SOA and PaaS services to create business systems never seen before... Learn about the new architectures, the new systems, the new patterns, the new business models rapidly exploiting this paradigm shift.</p>",
        start: new Date(2013,02,14,09,45),
        end: new Date(2013,02,14,10,30),
        location: "main"
    },
    {
        id: "break4",
        type: "break",
        title: "Break",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,14,10,30),
        end: new Date(2013,02,14,11,00),
        location: "main"
    },
    {
        id: "t1s10",
        type: "session",
        title: "WSO2 Architecture Vision: Looking Ahead to Carbon 5 and Stratos 2 and Beyond",
        speaker: ["azeez@wso2.com","amila@wso2.com"],
        abstract: "<p>WSO2 Carbon and Stratos 2 are based on a revolutionary architecture that decreases administration effort, reduces server instance count, and increases deployment flexibility. WSO2 Carbon 5 delivers major architectural improvements in scalability, availability, management, and user experience. Stratos 2 delivers a Platform-as-a-Service (PaaS) foundation with embedded Cloud services and an extensible cartridge model that adds WSO2 Carbon servers, non-WSO2 Java servers (e.g. Jetty), and other language frameworks (e.g. PHP) into the Stratos PaaS.</p><p>In this session we will be looking at the roadmaps of the next major releases, and vision for Carbon & Stratos.</p>",
        start: new Date(2013,02,14,11,00),
        end: new Date(2013,02,14,11,45),
        location: "T1"
    },
    {
        id: "t2s10",
        type: "session",
        title: "Developing Enterprise Applications with the WSO2 Application Platform",
        speaker: ["nuwan@wso2.com","anjana@wso2.com"],
        abstract: "<p>Bring innovation and productivity to your enterprise application development efforts with the WSO2 Application Platform. Without the WSO2 Application Platform, teams spend considerable time coding domain security, monitoring, auditing, authentication, and authorization. The WSO2 Application platform enables teams to focus on functional requirements and transparently inherit application scalability, availability, and reliability from the underlying platform. In this session, Nuwan and Anjana will describe how the WSO2 Development platform accelerates developing multi-channel user interfaces, business rules, workflows, and RESTful services. The session will include quick demonstrations to showcase the platform’s breadth and depth.</p>",
        start: new Date(2013,02,14,11,00),
        end: new Date(2013,02,14,11,45),
        location: "T2"
    },
    {
        id: "t1s11",
        type: "session",
        title: "Introducing the WSO2 Enterprise Integration Platform",
        speaker: ["miyuru@wso2.com"],
        abstract: "<p>The WSO2 SOA & Integration Platform guides integration teams towards implementing best-practice SOA patterns, overcoming SOA anti-patterns, and implementing SOA principles. In many SOA environments, teams build services and integrate endpoints, but do not deliver a cohesive architecture. The WSO2 mediation library, WSO2 governance registry, and advanced WSO2 ESB mediators provide required building blocks to establish shared architecture components, promote asset re-use, track system component dependencies, and evolve services at different rates.</p><p>In this session, Miyuru will describe how the WSO2 ESB solves enterprise integration challenges, and how a cohesive enterprise integration platform reduces platform implementation expense and time required to implement complex service integration use cases.</p>",
        start: new Date(2013,02,14,11,45),
        end: new Date(2013,02,14,12,30),
        location: "T1"
    },
    {
        id: "t2s11",
        type: "session",
        title: "Achieving Agility with WSO2 App Factory",
        speaker: ["shankar@wso2.com","dimuthu@wso2.com"],
        abstract: "<p>Developing applications using a scalable, adaptable, and repeatable development methodology is challenging task. While one team or project may be extremely effective, an organization’s ability to transfer best practices across teams and projects is hindered by outdated development tooling, poor processes, and ineffective governance. By selecting WSO2 App Factory, your team can accelerate time to market, gain on-demand access to development tools, simplify the development experience, and seamlessly integrate a governed, iterative lifecycle management process into your existing development tool chain. By linking DevOps activities, governance, and self-service across the entire software development lifecycle, WSO2 App Factory transforms the development experience, fosters innovation, and enables IT business agility.</p><p>WSO2 App Factory revolutionizes application delivery by extending a governed development environment across an ecosystem of team members and partners. The WSO2 App Factory Ecosystem PaaS environment incorporates development tooling, policies, processes, and dashboards into a self-service development collaboration space that scales across hundreds of development team members or partners. Team members or partners can share and integrate resources while conforming to governance policies and service level agreements.</p><p>In this session, Shankar will describe:</p><ul><li>Why traditional software development infrastructure continually fails to provide agility at scale</li><li>When teams are choosing to build an Ecosystem PaaS, scale development collaboration, and introduce transformative development services via a Cloud DevOps Factory</li><li>Where teams transform source control, build management, test automation, and deployment into a governed workflow and on-demand collaboration workspace</li><li>How WSO2 App Factory revolutionizes application development by linking development tooling, policies, processes, and dashboards with Cloud Platform as a Service to create a governed on-demand application development environment at web scale.</li>",
        start: new Date(2013,02,14,11,45),
        end: new Date(2013,02,14,12,30),
        location: "T2"
    },
    {
        id: "lunch3",
        type: "break",
        title: "Lunch",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,14,12,30),
        end: new Date(2013,02,14,13,30),
        location: "none"
    },
    {
        id: "t1s12",
        type: "session",
        title: "TBA",
        speaker: [],
        abstract: "TBD",
        start: new Date(2013,02,14,13.30),
        end: new Date(2013,02,14,14,00),
        location: "T1"
    },
    {
        id: "t2s12",
        type: "session",
        title: "Enterprise Governance with WSO2 Governance Registry and More",
        speaker: ["senaka@wso2.com"],
        abstract: "<p>Enterprise SOA Governance scales design and run-time policy enforcement, dependency management, asset promotion, impact analysis, and investment decisions across the organization’s application and service portfolio. Managing a complex portfolio with a spreadsheet, limited policy meta-data, and disconnected policy enforcement points will limit your organization’s ability to increase SOA maturity and achieve SOA benefits. The WSO2 Governance Registry facilitates enterprise SOA governance by integrating with several key components in modern SOA solutions. This session will describe how Governance Registry can be used in combination with several other WSO2 products, ESB, Developer Studio, Identity Server, API Manager and Business Activity Monitor to govern enterprise applications across conceptualization, development, production, maintenance, and retirement. In this session, Senaka will describe how Architects, Developers, DevOps, QA and TechOps teams can participate in a collaborative design-develop-test-deploy lifecycle process. Attendees will also learn about the best practices when using WSO2 middleware to govern applications and services.</p>",
        start: new Date(2013,02,14,13,30),
        end: new Date(2013,02,14,14,00),
        location: "T2"
    },
    {
        id: "t1s13",
        type: "session",
        title: "Sharpening the Spearpoint: Empowering the Edge Through SOA",
        speaker: ["adam@wso2.com"],
        abstract: "<p>Service Oriented Architecture (SOA) technologies can serve as transformation agents leading to a more effective, more efficient and significantly less expensive national defense establishment. The 21st century has seen some of the most dramatic changes in global military organizations since the advent of mechanization in the early 20th century. Successful organizations have evolved from Industrial Age to Information Age models that emphasize robust networking, shared situational knowledge, interoperability and operational agility. Information Age warfighting differs from its Industrial Age predecessor as well. Though highly lethal, it is generally limited in scope and seeks to effect behavioral modifications within an enemy government rather than the complete destruction of enemy forces. It is usually conducted within a joint or coalition environment, and centers on the data intensive use of precision guided munitions (PGM).</p><p>The needs of both the warfighting and acquisition communities have evolved as well. Commanders and combatants alike demand dramatic reductions in decision cycle time fueled by improved situational awareness, coordinated solution development and improvements to operational agility gained through transparent resource security and across-the-board interoperability. Procurement officials demand the minimization of sustainment costs, the elimination of redundancies and, as a sign of the times, ecologically friendly combat systems.</p><p>This presentation provides a case study of a program that leveraged the power and cost effective nature of WSO2’s open source SOA platform to achieve a dramatic reduction in sustainment and development costs, elimination of hardware and software redundancies, significant improvements in interoperability and information chain management, and, most importantly, the achievement of a dramatically shortened targeting to engagement cycle.</p>",
        start: new Date(2013,02,14,14.00),
        end: new Date(2013,02,14,14,30),
        location: "T1"
    },
    {
        id: "t2s13",
        type: "session",
        title: "Scalable Persistent Message Brokering with WSO2 Message Broker",
        speaker: ["srinath@wso2.com"],
        abstract: "<p>A highly available and fast message broker ensures high-volume message delivery and supports reliable business operations. While most open source message broker projects don’t match commercial offerings, WSO2 Message Broker 2.0 offers broker domains, a distributed architecture, and extreme scalability. In this session, Srinath will describe the new distributed message broker architecture, message sharing across brokers via a Cassandra cluster, and an AMQP based JMS style API. He will discuss the WSO2 Message Broker 2.0 design and explore real world use cases.</p>",
        start: new Date(2013,02,14,14,00),
        end: new Date(2013,02,14,14,30),
        location: "T2"
    },
    {
        id: "t1s14",
        type: "session",
        title: "High Performance Cloud Integration Platform",
        speaker: ["dipanjan@cognizant.com"],
        abstract: "<p>Cognizant Cloud Connector is built using best-of-breed open source technology and open standards. The cloud-based, service-oriented integration platform helps organizations connect their on-premise applications, cloud-based applications, and popular software-as-aservice applications. Users may author subscription and flow configurations, expose flows as services, and specify service level agreements.</p><p>Configuration is stored in a central platform repository. The platform secures, governs, and manages service interactions using standards-compliant policies. The platform supports fast wire formats besides SOAP and XML (REST). Tenants can peer into Cloud interactions by monitoring service usage and service invocation metrics.</p><p>Additionally, the platform offers Adapter Services for popular service providers and Entity Services compliant with common industry standard entity data models. Among other open source standards, and technology components the Cognizant Cloud Connector extends three WSO2 products; WSO2 Business Activity Monitor, WSO2 Governance Registry, and some modules of the WSO2 Identity Server. WSO2 Business Activity Monitor delivers customized monitoring dashboards and reports, WSO2 Governance registry stores integration flows, service subscriptions, and has been customized to deliver advanced artifact search capabilities. During his session, Dipanjan will present real-life use cases, demonstrate high performance, cloud-based integration capabilities, and illustrate how WSO2 open source products can be extended to deliver an innovative and high-performance cloud integration platform.</p>",
        start: new Date(2013,02,14,14.30),
        end: new Date(2013,02,14,15,00),
        location: "T1"
    },
    {
        id: "t2s14",
        type: "session",
        title: "Integrating People to Workflows and Applications with Human Tasks",
        speaker: ["nandika@wso2.com"],
        abstract: "<p>Human interactions are an essential component in most business processes. Manual human intervention is required to approve transactions, escalate priority, and resolve errors. When building an enterprise SOA, include business process automation as an integral component and incorporate workflow engines. With WSO2 Business Process Server 3.0, now you have the ability to integrate human interactions to your processes and applications. In this session, Nandika will explore:</p><ul><li>The concept of human tasks and SOA specifications (i.e. WS-Human task and BPEL4People)</li><li>Human task capabilities of WSO2 BPS and the available API’s</li><li>Building your BPEL workflow to support human interactions with WSO2 BPS</li>",
        start: new Date(2013,02,14,14,30),
        end: new Date(2013,02,14,15,00),
        location: "T2"
    },
    {
        id: "break5",
        type: "break",
        title: "Break",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,14,15,00),
        end: new Date(2013,02,14,15,30),
        location: "none"
    },
    {
        id: "keynote5",
        type: "keynote",
        title: "TBA",
        speaker: [],
        abstract: "TBD",
        start: new Date(2013,02,14,15,30),
        end: new Date(2013,02,14,16,15),
        location: "main"
    },
    {
        id: "keynote5",
        type: "keynote",
        title: "Closing Keynote",
        speaker: ["paul@wso2.com"],
        abstract: "TBD",
        start: new Date(2013,02,14,16,15),
        end: new Date(2013,02,14,17,00),
        location: "main"
    },
    {
        id: "break6",
        type: "break",
        title: "Main Agenda End",
        speaker: [],
        abstract: "",
        start: new Date(2013,02,14,17,00),
        end: new Date(2013,02,14,17,00),
        location: "none"
    }
]
}
