
function Cyber(){
    
    return (
        <div className="container mx-auto">
            <table border={1} cellSpacing={5} cellPadding={3} className='table-auto border'>
                <tr className="border"><th>Cerfications</th><th>Isssuing entity</th><th>Description</th><th>Time</th><th>Certificate Code</th></tr>
                <tr className="border"><td>SOC Analyst</td><td>ThinkCyber</td><td>Students mastered the intricacies of Windows domain operations, specifically using Sysmon for comprehensive event logging. They explored firewall configuration and intrusion detection systems in a SOC environment, gaining hands-on experience with tools like pfSense and Snort. They learned to navigate the key components of Security Information and Event Management (SIEM) through ELK stack and Splunk, enhancing their event monitoring capabilities. The journey concluded with advanced cybersecurity topics, including threat hunting via MITRE ATT&CK, log analysis, and incident response, equipping them with vital skills for threat detection and mitigation.</td>
                <td>2025</td><td><img src="soc.jpg"  className="w-96"/></td></tr>
                <tr className="border"><td>Network research</td><td>ThinkCyber</td><td>This project entails setting up a system that initiates with the installation of required applications, ensuring avoidance of repeated installations. It performs an anonymity check of the network connection, alerting if non-anonymous, and revealing the spoofed country name if anonymous. It also accepts user-specified scan targets. Furthermore, the system can establish a remote SSH connection to retrieve server details and execute commands such as Whois and open port scans. Finally, it saves the gathered data into local files and maintains a log for auditing data collection activities.</td>
                <td>2924</td><td><img src="network.jpg"  className="w-96"/></td></tr>
                <tr className="border"><td>Python Fundamentals</td><td>ThinkCyber</td><td>This project involves developing a Python tool specifically designed to analyze log files, with a focus on /var/log/auth.log. The tools primary function is to extract, examine, and interpret log data to uncover valuable insights about system operations, security events, and potential anomalies. It identifies key information such as command usage, user authentication changes, and security alerts, providing a detailed analysis that enhances the understanding of system behavior and security posture. The project also requires proper documentation, including comments in the code, and submission of both the source code and proof of functionality in the prescribed format.</td>
                <td>2024</td><td><img src="python.jpg" className="w-96"/></td></tr>
                <tr className="border"><td>Linux Fundamentals</td><td>ThinkCyber</td><td>This project entails the creation of a Bash script to capture and present various system metrics for a Linux operating system. The script provides insights into the Linux version in use, network details including private and public IP addresses as well as the default gateway. It extends to compute disk statistics, showcasing overall size, free, and used space. The script also highlights the five largest directories and monitors CPU usage, updating these statistics every ten seconds to reflect real-time system state.</td>
                <td>2024</td><td><img src="linux.jpg" className="w-96"/></td></tr>
                <tr className="border"><td>Introduction to Cyber</td><td>ThinkCyber</td><td>This project focuses on network mapping, encompassing the identification and display of key network details such as IP and MAC addresses of devices, router specifics, and ISP information. It also involves distinguishing connection types, i.e., Ethernet or Wireless, for each device. A crucial part of the project is to demonstrate the commands or resources leveraged to gather this data. Visual representation of the network configuration, achieved via tools like draw.io, adds a valuable dimension to this comprehensive exercise.</td>
                <td>2024</td><td>........</td></tr>
            </table>
        </div>
    );
}

export default Cyber;