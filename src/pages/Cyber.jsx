function Cyber() {
    const certifications = [
        {
            title: "SOC Analyst",
            entity: "ThinkCyber",
            description: "Students mastered the intricacies of Windows domain operations, specifically using Sysmon for comprehensive event logging. They explored firewall configuration and intrusion detection systems in a SOC environment, gaining hands-on experience with tools like pfSense and Snort. They learned to navigate the key components of Security Information and Event Management (SIEM) through ELK stack and Splunk, enhancing their event monitoring capabilities. The journey concluded with advanced cybersecurity topics, including threat hunting via MITRE ATT&CK, log analysis, and incident response, equipping them with vital skills for threat detection and mitigation.",
            time: "2025",
            image: "soc.jpg"
        },
        {
            title: "Network research",
            entity: "ThinkCyber",
            description: "This project entails setting up a system that initiates with the installation of required applications, ensuring avoidance of repeated installations. It performs an anonymity check of the network connection, alerting if non-anonymous, and revealing the spoofed country name if anonymous. It also accepts user-specified scan targets. Furthermore, the system can establish a remote SSH connection to retrieve server details and execute commands such as Whois and open port scans. Finally, it saves the gathered data into local files and maintains a log for auditing data collection activities.",
            time: "2024",
            image: "network.jpg"
        },
        {
            title: "Python Fundamentals",
            entity: "ThinkCyber",
            description: "This project involves developing a Python tool specifically designed to analyze log files, with a focus on /var/log/auth.log. The tools primary function is to extract, examine, and interpret log data to uncover valuable insights about system operations, security events, and potential anomalies. It identifies key information such as command usage, user authentication changes, and security alerts, providing a detailed analysis that enhances the understanding of system behavior and security posture. The project also requires proper documentation, including comments in the code, and submission of both the source code and proof of functionality in the prescribed format.",
            time: "2024",
            image: "python.jpg"
        },
        {
            title: "Linux Fundamentals",
            entity: "ThinkCyber",
            description: "This project entails the creation of a Bash script to capture and present various system metrics for a Linux operating system. The script provides insights into the Linux version in use, network details including private and public IP addresses as well as the default gateway. It extends to compute disk statistics, showcasing overall size, free, and used space. The script also highlights the five largest directories and monitors CPU usage, updating these statistics every ten seconds to reflect real-time system state.",
            time: "2024",
            image: "linux.jpg"
        },
        {
            title: "Introduction to Cyber",
            entity: "ThinkCyber",
            description: "This project focuses on network mapping, encompassing the identification and display of key network details such as IP and MAC addresses of devices, router specifics, and ISP information. It also involves distinguishing connection types, i.e., Ethernet or Wireless, for each device. A crucial part of the project is to demonstrate the commands or resources leveraged to gather this data. Visual representation of the network configuration, achieved via tools like draw.io, adds a valuable dimension to this comprehensive exercise.",
            time: "2024",
            image: "default.jpg"
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={cert.image} alt={cert.title} className="w-full object-cover"/>
                        <div className="p-1">
                            <h2 className="text-xl font-bold mb-2">{cert.title}</h2>
                            <h3 className="text-md font-semibold mb-2">{cert.entity}</h3>
                            <p className="text-gray-700 text-sm mb-1">{cert.description}</p>
                            <p className="text-gray-500 text-xs">{cert.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cyber;