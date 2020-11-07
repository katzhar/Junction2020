import React from "react";
import styles from './ProfileSkills.module.scss';
import { Chart } from 'react-chartjs-2';

const ProfileSkills = () => {
    const chart1 = <canvas id="marksChart1" width="600px"></canvas>;
    const chart2 = <canvas id="marksChart2" width="600px"></canvas>;
    React.useEffect(() => {
        const ctx = document.getElementById('marksChart1').getContext('2d');

        const marksData = {
            labels: ["math", "english", "physics", "philosophy", "programming", "economics", "geography"],
            datasets: [{
                label: "Education skills",
                backgroundColor: "rgba(200,0,0,0.2)",
                data: [3, 2, 3, 3, 3, 1, 2, 2]
            }]
        };
        const radarChart = new Chart(ctx, {
            type: 'radar',
            data: marksData,
            options: {
                scale: {
                    angleLines: {
                        display: false
                    },
                }
            },
        });
    }, [chart1]);

    React.useEffect(() => {
        const ctx = document.getElementById('marksChart2').getContext('2d');

        const marksData = {
            labels: ["art", "science", "sport", "other"],
            datasets: [{
                label: "Other skills",
                backgroundColor: "rgba(0,80,200, 0.2)",
                data: [3, 5, 6, 3]
            }]
        };
        const radarChart = new Chart(ctx, {
            type: 'radar',
            data: marksData,
            options: {
                scale: {
                    angleLines: {
                        display: false
                    },
                }
            },
        });
    }, [chart2]);

    return (
        <div className={styles.skillsContainer}>
            <div>{chart1}</div>
            <div>{chart2}</div>
        </div>
    );
};

export default ProfileSkills;