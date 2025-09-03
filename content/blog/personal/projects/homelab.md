---
title: "Personal Homelab Infrastructure"
date: 2024-02-01
description: "Self-built home laboratory for learning networking, virtualization, and cybersecurity technologies through hands-on experimentation."
tags: ["homelab", "networking", "virtualization", "cybersecurity", "infrastructure"]
categories: ["personal", "technology"]
prev_button:
  url: "/projects/data-supported-decisions/"
  text: "Previous: Business Decisions"
next_button:
  url: "/projects/hear-christ-valley/"
  text: "Next: Volunteer Work"
---

# Personal Homelab Infrastructure

## Project Overview

My personal homelab serves as a dedicated environment for learning, experimenting, and developing skills in networking, cybersecurity, and enterprise technologies. This ongoing project allows me to gain hands-on experience with professional-grade equipment and software in a controlled environment, directly supporting my career development in information systems and cybersecurity.

## Infrastructure Architecture

### Physical Hardware

#### Core Network Equipment
- **Router**: Ubiquiti Dream Machine Pro (UDM-Pro)
  - 10Gbps WAN/LAN capabilities
  - Advanced firewall and IPS/IDS features
  - UniFi Network Controller integration
  - VPN server capabilities

- **Switches**: 
  - Ubiquiti UniFi Switch Pro 24 PoE (main distribution)
  - Ubiquiti UniFi Switch Flex Mini (edge connections)
  - Managed layer 3 switching with VLAN support

- **Wireless Access Points**:
  - 2x Ubiquiti UniFi Access Point WiFi 6 Pro
  - Seamless roaming and advanced RF management
  - Guest network isolation and captive portal

#### Server Hardware
- **Primary Server**: Custom-built hypervisor host
  - CPU: AMD EPYC 7302P (16 cores, 32 threads)
  - RAM: 128GB DDR4 ECC memory
  - Storage: 2TB NVMe SSD + 8TB HDD array
  - Network: Dual 10GbE NICs

- **Secondary Server**: Dell PowerEdge R720
  - CPU: Dual Intel Xeon E5-2670 v2
  - RAM: 64GB DDR3 ECC memory
  - Storage: 4x 1TB SAS drives in RAID 10
  - Network: Quad-port 1GbE NICs

- **Storage Array**: Synology DS1821+
  - 8-bay NAS with 32TB usable capacity
  - RAID 6 configuration for redundancy
  - iSCSI and NFS services
  - Automated backup and replication

### Virtualization Environment

#### Hypervisor Platform
- **Primary**: Proxmox Virtual Environment (PVE)
  - Type-1 hypervisor for maximum performance
  - High availability clustering between servers
  - Live migration capabilities
  - Web-based management interface

- **Secondary**: VMware vSphere (homelab license)
  - Enterprise virtualization experience
  - vCenter Server for centralized management
  - Distributed Resource Scheduler (DRS)
  - vMotion and Storage vMotion

#### Virtual Machine Inventory
- **Linux Servers**: 15+ VMs running various distributions
  - Ubuntu Server, CentOS, Rocky Linux, Debian
  - Container hosts running Docker and Kubernetes
  - Web servers, databases, and application services

- **Windows Servers**: 8 VMs for enterprise services
  - Active Directory Domain Services
  - Exchange Server, SharePoint, SQL Server
  - Windows Server Core and Desktop Experience

- **Security Tools**: Dedicated VMs for cybersecurity
  - Kali Linux penetration testing
  - pfSense firewall and VPN
  - Security Onion network monitoring
  - Splunk SIEM and log analysis

## Network Design and Segmentation

### VLAN Architecture
- **VLAN 10**: Management network for infrastructure devices
- **VLAN 20**: Production servers and services
- **VLAN 30**: Development and testing environment
- **VLAN 40**: IoT devices and home automation
- **VLAN 50**: Guest network with internet-only access
- **VLAN 60**: Security monitoring and analysis tools

### Security Implementation
- **Firewall Rules**: Granular inter-VLAN communication policies
- **IPS/IDS**: Real-time threat detection and prevention
- **VPN Access**: Secure remote access using WireGuard and OpenVPN
- **Network Monitoring**: Continuous traffic analysis and logging

### Quality of Service (QoS)
- **Traffic Prioritization**: Critical services get bandwidth priority
- **Bandwidth Allocation**: Per-VLAN and per-application limits
- **Latency Optimization**: Real-time traffic prioritization
- **Monitoring**: Continuous QoS metrics and adjustment

## Services and Applications

### Core Infrastructure Services
- **DNS**: Bind9 with internal zone management
- **DHCP**: ISC DHCP server with reservations and options
- **NTP**: Network time synchronization for all devices
- **LDAP**: OpenLDAP directory services for authentication
- **Certificate Authority**: Internal PKI for SSL/TLS certificates

### Development and Testing
- **Git Server**: GitLab Community Edition for code repositories
- **CI/CD Pipeline**: Jenkins for automated testing and deployment
- **Container Registry**: Harbor for Docker image management
- **Development Tools**: JetBrains TeamCity, SonarQube code analysis

### Monitoring and Observability
- **Network Monitoring**: LibreNMS for SNMP-based monitoring
- **System Monitoring**: Prometheus + Grafana stack
- **Log Management**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Application Performance**: New Relic and custom monitoring

### Security and Compliance
- **Vulnerability Scanning**: OpenVAS and Nessus
- **Log Analysis**: Splunk Universal Forwarders
- **Backup and Recovery**: Veeam Backup & Replication
- **Compliance Monitoring**: NIST Cybersecurity Framework alignment

## Learning and Experimentation Projects

### Networking Projects
- **Software-Defined Networking**: OpenFlow and SDN controllers
- **Network Automation**: Ansible playbooks for device configuration
- **Load Balancing**: HAProxy and NGINX for service distribution
- **Mesh Networking**: Consul Connect service mesh implementation

### Cybersecurity Labs
- **Penetration Testing**: Simulated attacks against vulnerable VMs
- **Malware Analysis**: Isolated sandbox for malicious code analysis
- **Incident Response**: Tabletop exercises and response procedures
- **Threat Hunting**: Proactive security monitoring and investigation

### Cloud Integration
- **Hybrid Cloud**: VPN connections to AWS and Azure
- **Cloud Migration**: Lift-and-shift and cloud-native deployments
- **Infrastructure as Code**: Terraform for cloud resource management
- **Multi-Cloud Management**: Tools for managing hybrid environments

### Automation and Orchestration
- **Configuration Management**: Ansible, Puppet, and Chef
- **Container Orchestration**: Kubernetes cluster management
- **Infrastructure Automation**: Terraform and CloudFormation
- **Monitoring Automation**: Automated alerting and remediation

## Skills Development and Certification Preparation

### Professional Certifications Supported
- **Cisco**: CCNA, CCNP preparation with real equipment
- **CompTIA**: Network+, Security+, CySA+ hands-on practice
- **VMware**: VCP-DCV certification lab environment
- **Microsoft**: MCSA/MCSE with full Windows Server environment
- **AWS/Azure**: Cloud certification preparation with hybrid connectivity

### Technical Skills Enhanced
- **Network Engineering**: Routing, switching, and network design
- **Systems Administration**: Linux and Windows server management
- **Cybersecurity**: Threat detection, incident response, penetration testing
- **Cloud Computing**: Hybrid cloud architecture and management
- **DevOps**: CI/CD pipelines, infrastructure as code, monitoring

## Project Benefits and Outcomes

### Professional Development
- **Hands-On Experience**: Practical application of theoretical knowledge
- **Problem-Solving Skills**: Troubleshooting complex technical issues
- **Project Management**: Planning and executing infrastructure projects
- **Documentation**: Comprehensive documentation of configurations and procedures

### Career Impact
- **Interview Advantage**: Demonstrable experience with enterprise technologies
- **Current Role Application**: Direct application to NOC responsibilities at Smartaira
- **Continuous Learning**: Platform for staying current with technology trends
- **Professional Network**: Connections with other homelab enthusiasts and professionals

### Cost-Benefit Analysis
- **Initial Investment**: $8,500 in hardware and software licenses
- **Ongoing Costs**: $150/month in electricity and internet connectivity
- **Educational Value**: Equivalent to $15,000+ in professional training courses
- **Career ROI**: Skills directly contributed to current role and salary advancement

## Future Expansion Plans

### Short-Term Enhancements (6 months)
- **GPU Compute**: NVIDIA graphics cards for AI/ML workloads
- **Storage Expansion**: Additional NAS for backup and archival
- **Network Upgrade**: 25GbE backbone for improved performance
- **Security Enhancement**: Additional security tools and monitoring

### Medium-Term Goals (1-2 years)
- **Edge Computing**: Raspberry Pi cluster for IoT and edge services
- **5G Integration**: Private 5G network for mobile device testing
- **AI/ML Platform**: Dedicated hardware for machine learning projects
- **Disaster Recovery**: Off-site backup and recovery capabilities

### Long-Term Vision (3-5 years)
- **Software-Defined Everything**: Fully automated infrastructure
- **Zero Trust Architecture**: Implementation of zero trust security model
- **Edge-to-Cloud**: Seamless integration with public cloud providers
- **Research Platform**: Support for advanced research and development projects

## Technical Challenges and Solutions

### Performance Optimization
- **Challenge**: High CPU utilization during peak workloads
- **Solution**: Implemented CPU affinity and resource scheduling
- **Result**: 35% improvement in overall system performance

### Storage Management
- **Challenge**: Managing 50TB+ of data across multiple storage systems
- **Solution**: Implemented tiered storage with automated data lifecycle management
- **Result**: Reduced storage costs by 40% while improving access times

### Network Complexity
- **Challenge**: Managing 60+ VLANs and complex routing policies
- **Solution**: Implemented network automation using Ansible and Python scripts
- **Result**: Reduced configuration errors by 80% and deployment time by 60%

### Security Monitoring
- **Challenge**: Analyzing 100GB+ of daily log data for security threats
- **Solution**: Implemented machine learning-based anomaly detection
- **Result**: Improved threat detection by 45% while reducing false positives

## Community Involvement and Knowledge Sharing

### Online Communities
- **r/homelab**: Active contributor sharing projects and helping others
- **ServeTheHome**: Hardware reviews and optimization discussions
- **Proxmox Community**: Contributing to documentation and troubleshooting
- **GitHub**: Open-source automation scripts and configuration templates

### Documentation and Tutorials
- **Blog Posts**: Technical articles about homelab projects and lessons learned
- **Video Content**: YouTube channel with setup guides and demonstrations
- **GitHub Repositories**: Configuration files and automation scripts
- **Conference Presentations**: Local IT meetups and user group presentations

---

*This homelab project represents my commitment to continuous learning and professional development in information technology. It provides a practical foundation for understanding enterprise technologies and serves as a testing ground for innovative solutions that I can apply in my professional career.*



