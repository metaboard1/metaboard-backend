'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const articles = [
            {
                id: 15,
                title: "sanskar",
                description: "asdkjjbsdsdfsdf",
                author: "wer",
                contentHtml: null,
                estimateReadTime: 45,
                coverImage: "cover-7c6e6cd1b11a50b6d6172a853231506917528274666661.png",
                isActive: false,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 17,
                title: "Navigating Legal Risk and Compliance in the Era of AI: A Comprehensive Guide for Indian In-House Counsels",
                description: "As Artificial Intelligence [AI] continues to advance at an unprecedented pace, it presents both opportunities and challenges for in-house counsels in India. Managing legal risk and ensuring compliance in the realm of AI requires a deep understanding of the intricate legal landscape.",
                author: "Yash Kumar Jha",
                contentHtml: null,
                estimateReadTime: 15,
                coverImage: null,
                isActive: false,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 18,
                title: "Data Privacy Laws in India: DPDP Act 2023 Implementation Guide",
                description: "A comprehensive analysis of the Digital Personal Data Protection Act 2023 and its implications for businesses operating in India. This guide covers compliance requirements, penalties, and best practices.",
                author: "Priya Sharma",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 19,
                title: "Corporate Governance Framework for Indian Startups",
                description: "Essential corporate governance principles and practices that Indian startups must adopt to ensure sustainable growth and investor confidence in the competitive market.",
                author: "Rajesh Gupta",
                contentHtml: null,
                estimateReadTime: 8,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 20,
                title: "Intellectual Property Strategy for Tech Companies in India",
                description: "A strategic approach to intellectual property management for technology companies, covering patents, trademarks, copyrights, and trade secrets in the Indian context.",
                author: "Anitha Reddy",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 21,
                title: "Contract Negotiation Best Practices for Indian Businesses",
                description: "Master the art of contract negotiation with proven strategies and techniques specifically tailored for the Indian business environment and legal framework.",
                author: "Vikram Singh",
                contentHtml: null,
                estimateReadTime: 7,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 22,
                title: "Employment Law Updates: New Labor Codes in India",
                description: "Understanding the impact of the four new labor codes on employment practices, worker rights, and compliance requirements for Indian employers.",
                author: "Meera Iyer",
                contentHtml: null,
                estimateReadTime: 13,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 23,
                title: "Cryptocurrency Regulations in India: Current Status and Future Outlook",
                description: "An in-depth analysis of the evolving regulatory landscape for cryptocurrencies in India, including recent developments and potential future regulations.",
                author: "Arjun Patel",
                contentHtml: null,
                estimateReadTime: 11,
                coverImage: null,
                isActive: false,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 24,
                title: "Mergers and Acquisitions: Legal Due Diligence Checklist",
                description: "A comprehensive checklist for conducting legal due diligence in M&A transactions, covering key areas of concern and risk assessment strategies.",
                author: "Kavita Malhotra",
                contentHtml: null,
                estimateReadTime: 9,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 25,
                title: "ESG Compliance for Indian Corporations",
                description: "Environmental, Social, and Governance (ESG) compliance requirements for Indian corporations, including reporting standards and best practices.",
                author: "Suresh Chandra",
                contentHtml: null,
                estimateReadTime: 14,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 26,
                title: "Dispute Resolution Mechanisms in Indian Commercial Law",
                description: "Exploring various dispute resolution mechanisms available in Indian commercial law, including arbitration, mediation, and litigation strategies.",
                author: "Deepika Nair",
                contentHtml: null,
                estimateReadTime: 16,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 27,
                title: "Cross-Border Tax Implications for Indian Businesses",
                description: "Understanding the tax implications of cross-border transactions and international business operations for Indian companies.",
                author: "Rohit Agarwal",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 28,
                title: "Regulatory Compliance for Fintech Companies in India",
                description: "A comprehensive guide to regulatory compliance requirements for fintech companies operating in India, covering RBI guidelines and emerging regulations.",
                author: "Sneha Kapoor",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 29,
                title: "Consumer Protection Laws: Rights and Remedies",
                description: "An overview of consumer protection laws in India, including the Consumer Protection Act 2019 and available remedies for consumer grievances.",
                author: "Amit Bansal",
                contentHtml: null,
                estimateReadTime: 8,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 30,
                title: "Digital India Initiative: Legal Framework and Compliance",
                description: "Understanding the legal framework supporting India's Digital India initiative and compliance requirements for digital service providers.",
                author: "Ritu Joshi",
                contentHtml: null,
                estimateReadTime: 11,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 31,
                title: "Environmental Law Compliance for Manufacturing Industries",
                description: "Essential environmental law compliance requirements for manufacturing industries in India, including pollution control and waste management.",
                author: "Manoj Kumar",
                contentHtml: null,
                estimateReadTime: 13,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 32,
                title: "Banking Regulations: NPA Management and Recovery",
                description: "Comprehensive guide to Non-Performing Asset (NPA) management and recovery mechanisms under Indian banking regulations.",
                author: "Nisha Verma",
                contentHtml: null,
                estimateReadTime: 15,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 33,
                title: "Real Estate Regulations: RERA Implementation and Impact",
                description: "Analysis of the Real Estate Regulation and Development Act (RERA) implementation and its impact on the real estate sector in India.",
                author: "Gaurav Mehta",
                contentHtml: null,
                estimateReadTime: 9,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 34,
                title: "Insurance Law Updates: Recent Regulatory Changes",
                description: "Recent updates and regulatory changes in Indian insurance law, including new guidelines and compliance requirements.",
                author: "Pooja Sinha",
                contentHtml: null,
                estimateReadTime: 7,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 35,
                title: "Corporate Social Responsibility: Legal Obligations and Best Practices",
                description: "Understanding CSR legal obligations under the Companies Act 2013 and best practices for effective CSR implementation.",
                author: "Kiran Desai",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 36,
                title: "Competition Law: Anti-Trust Compliance for Indian Companies",
                description: "A comprehensive guide to competition law compliance and anti-trust regulations for Indian companies under the Competition Act.",
                author: "Ashish Tiwari",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 37,
                title: "Healthcare Regulations: Medical Device Compliance",
                description: "Regulatory compliance requirements for medical devices in India, including licensing, quality standards, and safety regulations.",
                author: "Dr. Sunita Rao",
                contentHtml: null,
                estimateReadTime: 11,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 38,
                title: "Foreign Exchange Management: FEMA Compliance Guide",
                description: "Understanding Foreign Exchange Management Act (FEMA) regulations and compliance requirements for businesses and individuals.",
                author: "Rajiv Khanna",
                contentHtml: null,
                estimateReadTime: 14,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 39,
                title: "Telecom Regulations: Spectrum Allocation and Licensing",
                description: "Overview of telecom regulations in India, including spectrum allocation policies and licensing requirements for telecom operators.",
                author: "Vinod Sharma",
                contentHtml: null,
                estimateReadTime: 13,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 40,
                title: "Securities Law: Capital Market Regulations and Compliance",
                description: "Understanding securities law and capital market regulations in India, including SEBI guidelines and compliance requirements.",
                author: "Madhuri Pandit",
                contentHtml: null,
                estimateReadTime: 16,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 41,
                title: "Agricultural Laws: Recent Reforms and Their Impact",
                description: "Analysis of recent agricultural law reforms in India and their impact on farmers, agribusiness, and the agricultural sector.",
                author: "Ramesh Yadav",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 42,
                title: "Insolvency and Bankruptcy Code: Recent Amendments",
                description: "Recent amendments to the Insolvency and Bankruptcy Code (IBC) and their implications for creditors, debtors, and resolution professionals.",
                author: "Sanjay Mishra",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 43,
                title: "Cyber Security Laws: Data Protection and Privacy",
                description: "Comprehensive overview of cyber security laws in India, focusing on data protection, privacy rights, and compliance requirements.",
                author: "Neha Agarwal",
                contentHtml: null,
                estimateReadTime: 9,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 44,
                title: "Education Law: Regulatory Framework for Educational Institutions",
                description: "Understanding the regulatory framework governing educational institutions in India, including licensing, accreditation, and compliance requirements.",
                author: "Prof. Indira Devi",
                contentHtml: null,
                estimateReadTime: 11,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 45,
                title: "Media and Entertainment Law: Content Regulation and Censorship",
                description: "Overview of media and entertainment law in India, including content regulation, censorship guidelines, and broadcasting regulations.",
                author: "Tarun Malhotra",
                contentHtml: null,
                estimateReadTime: 8,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 46,
                title: "Aviation Law: Regulatory Framework for Airlines and Airports",
                description: "Understanding the regulatory framework governing aviation in India, including licensing requirements for airlines and airport operations.",
                author: "Captain Mohan Das",
                contentHtml: null,
                estimateReadTime: 13,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 47,
                title: "Pharmaceutical Regulations: Drug Approval and Manufacturing",
                description: "Comprehensive guide to pharmaceutical regulations in India, covering drug approval processes, manufacturing standards, and compliance requirements.",
                author: "Dr. Rakesh Gupta",
                contentHtml: null,
                estimateReadTime: 14,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 48,
                title: "Energy Law: Renewable Energy Policies and Regulations",
                description: "Overview of energy law in India, focusing on renewable energy policies, regulations, and incentives for clean energy projects.",
                author: "Pradeep Singh",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 49,
                title: "Import-Export Regulations: Trade Policy and Compliance",
                description: "Understanding import-export regulations and trade policy in India, including customs procedures and compliance requirements.",
                author: "Sunil Aggarwal",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 50,
                title: "Tax Litigation: Strategies and Best Practices",
                description: "Effective strategies and best practices for tax litigation in India, including case preparation, documentation, and court procedures.",
                author: "Shweta Jain",
                contentHtml: null,
                estimateReadTime: 15,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 51,
                title: "Corporate Restructuring: Legal and Tax Implications",
                description: "Comprehensive analysis of legal and tax implications of corporate restructuring in India, including mergers, demergers, and spin-offs.",
                author: "Dinesh Chandra",
                contentHtml: null,
                estimateReadTime: 11,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 52,
                title: "International Trade Law: WTO Compliance and Dispute Resolution",
                description: "Understanding international trade law, WTO compliance requirements, and dispute resolution mechanisms for Indian businesses.",
                author: "Ankit Saxena",
                contentHtml: null,
                estimateReadTime: 13,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 53,
                title: "Constitutional Law: Fundamental Rights and Judicial Review",
                description: "Analysis of fundamental rights under the Indian Constitution and the role of judicial review in protecting constitutional principles.",
                author: "Justice Retired K.M. Sharma",
                contentHtml: null,
                estimateReadTime: 16,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 54,
                title: "Criminal Law Updates: Recent Amendments and Landmark Judgments",
                description: "Recent amendments to criminal law in India and analysis of landmark judgments that have shaped the criminal justice system.",
                author: "Advocate Ravi Kumar",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 55,
                title: "Family Law: Marriage, Divorce, and Property Rights",
                description: "Comprehensive guide to family law in India, covering marriage laws, divorce procedures, and property rights for different communities.",
                author: "Adv. Kavitha Menon",
                contentHtml: null,
                estimateReadTime: 9,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 56,
                title: "Property Law: Land Acquisition and Registration",
                description: "Understanding property law in India, including land acquisition procedures, registration requirements, and title verification.",
                author: "Mohit Agarwal",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 57,
                title: "Administrative Law: Government Decision-Making and Judicial Review",
                description: "Overview of administrative law principles, government decision-making processes, and judicial review of administrative actions.",
                author: "Prof. Rajesh Aggarwal",
                contentHtml: null,
                estimateReadTime: 14,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 58,
                title: "Contract Law: Formation, Performance, and Remedies",
                description: "Fundamental principles of contract law in India, including contract formation, performance obligations, and available remedies for breach.",
                author: "Sameer Joshi",
                contentHtml: null,
                estimateReadTime: 11,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 59,
                title: "Tort Law: Negligence and Liability Principles",
                description: "Understanding tort law in India, including negligence principles, liability concepts, and remedies for tortious conduct.",
                author: "Adv. Priya Bhatt",
                contentHtml: null,
                estimateReadTime: 8,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 60,
                title: "Evidence Law: Admissibility and Examination of Witnesses",
                description: "Comprehensive guide to evidence law in India, covering admissibility rules, examination of witnesses, and documentary evidence.",
                author: "Senior Advocate Mohan Lal",
                contentHtml: null,
                estimateReadTime: 13,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 61,
                title: "Arbitration Law: Domestic and International Arbitration",
                description: "Understanding arbitration law in India, including domestic arbitration procedures and international commercial arbitration.",
                author: "Arbitrator Suresh Patel",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 62,
                title: "Legal Ethics: Professional Conduct and Disciplinary Proceedings",
                description: "Overview of legal ethics and professional conduct rules for lawyers in India, including disciplinary proceedings and sanctions.",
                author: "Bar Council Member Ravi Shankar",
                contentHtml: null,
                estimateReadTime: 7,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 63,
                title: "Jurisprudence: Legal Theory and Philosophy",
                description: "Introduction to jurisprudence and legal theory, exploring different schools of legal thought and their application in Indian law.",
                author: "Prof. Anita Sharma",
                contentHtml: null,
                estimateReadTime: 15,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 64,
                title: "Public Interest Litigation: Access to Justice and Social Reform",
                description: "Understanding Public Interest Litigation (PIL) as a tool for access to justice and social reform in the Indian legal system.",
                author: "Social Activist Advocate Meera Devi",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 65,
                title: "Legal Research Methodology: Techniques and Best Practices",
                description: "Comprehensive guide to legal research methodology, including research techniques, source evaluation, and citation practices.",
                author: "Research Scholar Deepak Gupta",
                contentHtml: null,
                estimateReadTime: 9,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 66,
                title: "Alternative Dispute Resolution: Mediation and Conciliation",
                description: "Overview of alternative dispute resolution mechanisms in India, focusing on mediation and conciliation processes.",
                author: "Mediator Adv. Sunita Rao",
                contentHtml: null,
                estimateReadTime: 11,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 67,
                title: "Legal Writing: Drafting Pleadings and Legal Documents",
                description: "Essential guide to legal writing, including techniques for drafting pleadings, contracts, and other legal documents.",
                author: "Legal Writer Vikash Sharma",
                contentHtml: null,
                estimateReadTime: 8,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 68,
                title: "Court Procedures: Civil and Criminal Litigation Process",
                description: "Step-by-step guide to court procedures in India, covering both civil and criminal litigation processes.",
                author: "Court Master Retired Ram Prasad",
                contentHtml: null,
                estimateReadTime: 14,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 69,
                title: "Legal Technology: Digital Transformation in Legal Practice",
                description: "Exploring the impact of technology on legal practice, including legal tech tools, AI applications, and digital transformation.",
                author: "Legal Tech Expert Rahul Verma",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 70,
                title: "International Law: Treaties and Diplomatic Relations",
                description: "Understanding international law principles, treaty obligations, and diplomatic relations in the context of Indian foreign policy.",
                author: "Diplomat Retired Sushma Patel",
                contentHtml: null,
                estimateReadTime: 13,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 71,
                title: "Human Rights Law: Protection and Enforcement Mechanisms",
                description: "Comprehensive overview of human rights law in India, including protection mechanisms and enforcement procedures.",
                author: "Human Rights Lawyer Arun Kumar",
                contentHtml: null,
                estimateReadTime: 11,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 72,
                title: "Women and Law: Gender Justice and Legal Reforms",
                description: "Analysis of laws relating to women in India, gender justice issues, and recent legal reforms for women's rights.",
                author: "Women's Rights Advocate Priti Singh",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: false,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 73,
                title: "Child Rights: Protection and Welfare Laws",
                description: "Understanding child rights and protection laws in India, including child welfare measures and juvenile justice system.",
                author: "Child Rights Expert Dr. Nalini Rao",
                contentHtml: null,
                estimateReadTime: 9,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 74,
                title: "Disability Rights: Legal Framework and Accessibility",
                description: "Overview of disability rights laws in India, including the Rights of Persons with Disabilities Act and accessibility requirements.",
                author: "Disability Rights Advocate Mohan Das",
                contentHtml: null,
                estimateReadTime: 12,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 75,
                title: "Elder Law: Rights and Protection of Senior Citizens",
                description: "Understanding elder law and rights of senior citizens in India, including maintenance obligations and protection measures.",
                author: "Elder Law Specialist Geeta Sharma",
                contentHtml: null,
                estimateReadTime: 8,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 76,
                title: "Environmental Justice: Climate Change and Legal Responses",
                description: "Exploring environmental justice issues and legal responses to climate change in India, including green tribunals and environmental litigation.",
                author: "Environmental Lawyer Anil Gupta",
                contentHtml: null,
                estimateReadTime: 14,
                coverImage: null,
                isActive: false,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 77,
                title: "Consumer Rights: E-commerce and Digital Transactions",
                description: "Understanding consumer rights in the digital age, including e-commerce regulations and protection in digital transactions.",
                author: "Consumer Rights Advocate Sanjay Mehta",
                contentHtml: null,
                estimateReadTime: 10,
                coverImage: null,
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 78,
                title: "Sports Law: Regulations and Governance in Indian Sports",
                description: "Overview of sports law in India, including governance structures, regulations, and legal issues in sports industry.",
                author: "Sports Law Expert Rajesh Khanna",
                contentHtml: "<div class=\"prose\"><p class=\"prose-p prose-p-first\">The legal profession stands at the precipice of a technological revolution that promises to fundamentally reshape how law is practiced, understood, and delivered to clients worldwide.</p><p class=\"prose-p\">As artificial intelligence and machine learning technologies mature, they are beginning to penetrate every aspect of legal work\u2014from document review and contract analysis to legal research and predictive analytics.</p><blockquote class=\"prose-blockquote\">\"We are witnessing the most significant transformation of the legal profession since the advent of the printing press,\" says Dr. Michael Thompson, Director of Legal Innovation at Stanford Law School.</blockquote><p class=\"prose-p\">This transformation is not merely theoretical. Law firms across the globe are already implementing AI-powered tools that can review thousands of documents in minutes, identify relevant case law with unprecedented accuracy, and even predict the likelihood of success in litigation.</p><h2 class=\"prose-h2\">The Current Landscape</h2><p class=\"prose-p\">Today's legal AI applications fall into several key categories:</p><ul class=\"prose-ul\"><li class=\"prose-li\"><strong class=\"prose-strong\">Document Review:</strong> AI systems can analyze contracts, legal briefs, and discovery documents with remarkable speed and accuracy.</li><li class=\"prose-li\"><strong class=\"prose-strong\">Legal Research:</strong> Machine learning algorithms can identify relevant precedents and statutes more efficiently than traditional keyword searches.</li><li class=\"prose-li\"><strong class=\"prose-strong\">Predictive Analytics:</strong> Courts and law firms are using AI to predict case outcomes and optimize legal strategies.</li><li class=\"prose-li\"><strong class=\"prose-strong\">Client Communication:</strong> Chatbots and automated systems are handling routine client inquiries and document preparation.</li></ul><p class=\"prose-p\">The implications of these developments extend far beyond mere efficiency gains. They represent a fundamental shift in how legal services are conceived, delivered, and valued.</p><h2 class=\"prose-h2\">Challenges and Opportunities</h2><p class=\"prose-p\">However, this technological revolution is not without its challenges. Questions of ethics, accountability, and the unauthorized practice of law loom large as AI systems become more sophisticated and autonomous.</p><p class=\"prose-p\">Bar associations and regulatory bodies are grappling with how to adapt existing ethical frameworks to address AI-powered legal tools. The American Bar Association has issued guidance on the use of AI in legal practice, emphasizing the importance of maintaining human oversight and ensuring client confidentiality.</p><blockquote class=\"prose-blockquote\">\"The key is not to fear the technology, but to understand it and use it responsibly,\" notes Professor Elena Rodriguez, an expert in legal technology ethics at Harvard Law School.</blockquote><p class=\"prose-p\">For law students and young lawyers, this technological shift presents both opportunities and imperatives. Those who embrace these tools and develop the skills to work alongside AI will find themselves at a significant advantage in the evolving legal marketplace.</p><h2 class=\"prose-h2\">Looking Forward</h2><p class=\"prose-p\">As we look to the future, several trends are becoming clear:</p><p class=\"prose-p\">First, AI will continue to automate routine legal tasks, freeing lawyers to focus on higher-value work that requires human judgment, creativity, and emotional intelligence.</p><p class=\"prose-p\">Second, the democratization of legal services through AI-powered tools will make legal assistance more accessible to individuals and small businesses who previously could not afford traditional legal representation.</p><p class=\"prose-p\">Third, the legal profession will need to adapt its educational and training programs to ensure that future lawyers are equipped with the technological literacy necessary to thrive in an AI-enhanced practice environment.</p><p class=\"prose-p\">The transformation of the legal profession through artificial intelligence is not a distant possibility\u2014it is happening now. The question is not whether these changes will occur, but how quickly and how effectively the legal community will adapt to embrace them.</p></div>",
                estimateReadTime: 11,
                coverImage: "cover-15879a8733404d2fa44381e530b2a1a017534515239151.png",
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: ".prose{color:rgb(55, 65, 81);font-family:Georgia, serif;line-height:1.8;font-size:18px;max-width:none;}.prose-p{margin-bottom:1.5rem;line-height:1.8;}.prose-p-first::first-letter{float:left;font-size:4rem;line-height:3.5rem;margin-right:0.5rem;margin-top:0.25rem;color:rgb(220, 38, 38);font-weight:bold;font-family:Georgia, serif;}.prose-h2{font-size:1.875rem;font-weight:700;color:rgb(17, 24, 39);margin-top:3rem;margin-bottom:1.5rem;font-family:Inter, sans-serif;}.prose-blockquote{font-size:1.25rem;font-style:italic;color:#f800ff;background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgba(220, 38, 38, 0.05);backdrop-filter:blur(10px);border-left-width:4px;border-left-style:solid;border-left-color:rgb(220, 38, 38);padding-top:1.5rem;padding-right:1.5rem;padding-bottom:1.5rem;padding-left:1.5rem;margin-top:2rem;margin-right:0px;margin-bottom:2rem;margin-left:0px;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem;font-family:Georgia, serif;}.prose-ul{margin-top:1.5rem;margin-right:0px;margin-bottom:1.5rem;margin-left:0px;padding-left:2rem;}.prose-li{margin-bottom:0.5rem;line-height:1.7;}.prose-strong{color:rgb(17, 24, 39);font-weight:600;}",
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })
            },
            {
                id: 79,
                title: "Maritime Law: Shipping and Port Regulations",
                description: "Understanding maritime law in India, including shipping regulations, port operations, and admiralty jurisdiction.",
                author: "Maritime Lawyer Captain Suresh Rao",
                contentHtml: null,
                estimateReadTime: 13,
                coverImage: "cover-15879a8733404d2fa44381e530b2a1a017534502360451.png",
                isActive: false,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: null,
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })

            },
            {
                id: 80,
                title: "Space Law: Satellite Technology and Commercial Space Activities",
                description: "Emerging area of space law in India, covering satellite technology regulations and commercial space activities.",
                author: "Space Law Expert Dr. Kiran Patel",
                contentHtml: "<div class=\"prose\"><p class=\"prose-p prose-p-first\">The legal profession stands at the precipice of a technological revolution that promises to fundamentally reshape how law is practiced, understood, and delivered to clients worldwide.</p><p class=\"prose-p\">As artificial intelligence and machine learning technologies mature, they are beginning to penetrate every aspect of legal work\u2014from document review and contract analysis to legal research and predictive analytics.</p><blockquote class=\"prose-blockquote\">\"We are witnessing the most significant transformation of the legal profession since the advent of the printing press,\" says Dr. Michael Thompson, Director of Legal Innovation at Stanford Law School.</blockquote><p class=\"prose-p\">This transformation is not merely theoretical. Law firms across the globe are already implementing AI-powered tools that can review thousands of documents in minutes, identify relevant case law with unprecedented accuracy, and even predict the likelihood of success in litigation.</p><video allowfullscreen=\"allowfullscreen\" id=\"ixori\" src=\"img/video2.webm\" controls></video><iframe frameborder=\"0\" id=\"i4d5g\" src=\"https://maps.google.com/maps?&z=1&t=q&output=embed\"></iframe><h2 class=\"prose-h2\">The Current Landscape</h2><p class=\"prose-p\">Today's legal AI applications fall into several key categories:</p><ul class=\"prose-ul\"><li class=\"prose-li\"><strong class=\"prose-strong\">Document Review:</strong> AI systems can analyze contracts, legal briefs, and discovery documents with remarkable speed and accuracy.</li><li class=\"prose-li\"><strong class=\"prose-strong\">Legal Research:</strong> Machine learning algorithms can identify relevant precedents and statutes more efficiently than traditional keyword searches.</li><li class=\"prose-li\"><strong class=\"prose-strong\">Predictive Analytics:</strong> Courts and law firms are using AI to predict case outcomes and optimize legal strategies.</li><li class=\"prose-li\"><strong class=\"prose-strong\">Client Communication:</strong> Chatbots and automated systems are handling routine client inquiries and document preparation.</li></ul><p class=\"prose-p\">The implications of these developments extend far beyond mere efficiency gains. They represent a fundamental shift in how legal services are conceived, delivered, and valued.</p><h2 class=\"prose-h2\">Challenges and Opportunities</h2><p class=\"prose-p\">However, this technological revolution is not without its challenges. Questions of ethics, accountability, and the unauthorized practice of law loom large as AI systems become more sophisticated and autonomous.</p><p class=\"prose-p\">Bar associations and regulatory bodies are grappling with how to adapt existing ethical frameworks to address AI-powered legal tools. The American Bar Association has issued guidance on the use of AI in legal practice, emphasizing the importance of maintaining human oversight and ensuring client confidentiality.</p><blockquote class=\"prose-blockquote\">\"The key is not to fear the technology, but to understand it and use it responsibly,\" notes Professor Elena Rodriguez, an expert in legal technology ethics at Harvard Law School.</blockquote><p class=\"prose-p\">For law students and young lawyers, this technological shift presents both opportunities and imperatives. Those who embrace these tools and develop the skills to work alongside AI will find themselves at a significant advantage in the evolving legal marketplace.</p><h2 class=\"prose-h2\">Looking Forward</h2><p class=\"prose-p\">As we look to the future, several trends are becoming clear:</p><p class=\"prose-p\">First, AI will continue to automate routine legal tasks, freeing lawyers to focus on higher-value work that requires human judgment, creativity, and emotional intelligence.</p><p class=\"prose-p\">Second, the democratization of legal services through AI-powered tools will make legal assistance more accessible to individuals and small businesses who previously could not afford traditional legal representation.</p><p class=\"prose-p\">Third, the legal profession will need to adapt its educational and training programs to ensure that future lawyers are equipped with the technological literacy necessary to thrive in an AI-enhanced practice environment.</p><p class=\"prose-p\">The transformation of the legal profession through artificial intelligence is not a distant possibility\u2014it is happening now. The question is not whether these changes will occur, but how quickly and how effectively the legal community will adapt to embrace them.</p></div>",
                estimateReadTime: 12,
                coverImage: "cover-9ad91845f0ca5bf89834b3b42ad237e217534473931171.jpg",
                isActive: true,
                publishedAt: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
                contentCss: ".prose{color:rgb(55, 65, 81);font-family:Georgia, serif;line-height:1.8;font-size:18px;max-width:none;}.prose-p{margin-bottom:1.5rem;line-height:1.8;font-family:Georgia, serif;}.prose-p-first::first-letter{float:left;font-size:4rem;line-height:3.5rem;margin-right:0.5rem;margin-top:0.25rem;color:rgb(220, 38, 38);font-weight:bold;font-family:Georgia, serif;}.prose-h2{font-size:1.875rem;font-weight:700;color:rgb(17, 24, 39);margin-top:3rem;margin-bottom:1.5rem;font-family:Inter, sans-serif;}.prose-blockquote{font-size:1.25rem;font-style:italic;color:rgb(220, 38, 38);background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgba(220, 38, 38, 0.05);backdrop-filter:blur(10px);border-left-width:4px;border-left-style:solid;border-left-color:rgb(220, 38, 38);padding-top:1.5rem;padding-right:1.5rem;padding-bottom:1.5rem;padding-left:1.5rem;margin-top:2rem;margin-right:0px;margin-bottom:2rem;margin-left:0px;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem;font-family:Georgia, serif;}.prose-ul{margin-top:1.5rem;margin-right:0px;margin-bottom:1.5rem;margin-left:0px;padding-left:2rem;}.prose-li{margin-bottom:0.5rem;line-height:1.7;}.prose-strong{color:rgb(17, 24, 39);font-weight:600;}#ixori{height:350px;width:615px;}#i4d5g{height:350px;}",
                isFeatured: false,
                authorSocials: JSON.stringify({
                    twitter: "",
                    facebook: "",
                    linkedin: ""
                })
            }
        ]
        await queryInterface.bulkInsert('Articles', articles, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
