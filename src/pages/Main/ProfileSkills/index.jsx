import React from "react";
import styles from './ProfileSkills.module.scss';
import { Chart } from 'react-chartjs-2';
import {data} from "../../../data";
import {useParams} from "react-router-dom";

const ProfileSkills = () => {
    const location = useParams();
    let index;
    data.users.forEach((user, i) => {
        if (user.id === location.id) {
            index = i;
        }
    });
    const user = data.users[index];
    const chart1 = <canvas id="marksChart1" width="600px"></canvas>;
    const chart2 = <canvas id="marksChart2" width="600px"></canvas>;
    React.useEffect(() => {
        const ctx = document.getElementById('marksChart1').getContext('2d');

        const marksData = {
            labels: ["math", "english", "physics", "philosophy", "programming", "economics", "geography"],
            datasets: [{
                label: "Education skills",
                backgroundColor: "rgba(200,0,0,0.2)",
                data: [
                    user.rate.academicPerformance.math,
                    user.rate.academicPerformance.english,
                    user.rate.academicPerformance.phisics,
                    user.rate.academicPerformance.philosophy,
                    user.rate.academicPerformance.history,
                    user.rate.academicPerformance.programming,
                    user.rate.academicPerformance.economy,
                    user.rate.academicPerformance.geographi,
                ]
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

                data: [
                    user.rate.extraPerfomance.art,
                    user.rate.extraPerfomance.science,
                    user.rate.extraPerfomance.sport,
                    user.rate.extraPerfomance.other,

                ]
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
            <div className={styles.GraphItem}>{chart1}</div>
            <div className={styles.GraphItem}>{chart2}</div>
        </div>
    );
};

export default ProfileSkills;