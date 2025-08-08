import { chartsConfig } from "@/configs";

const DemandeChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Demande",
      data: [500, 250, 100, 220, 500, 100, 400],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Temps",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTaskChart = {
  type: "bar",
  height: 220,
  series: [
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c", "#d32f2f"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};
const completedTasksChart = {
  ...completedTaskChart,
  series: [
    {
      name: "Succès",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      name: "Échecs",
      data: [5, 4, 30, 32, 50, 35, 20, 23, 50],
    },
    
  ],
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Nombre de demandes",
    description: "Suivi des demandes récentes reçues",
    footer: "sent 2 days ago",
    chart: DemandeChart,
  },
  {
    color: "white",
    title: "Temps moyen de traitement",
    description: "15% increase in today",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Taux de génération par semaine",
    description: "Comparaison des performances hebdomadaires",
    footer: "just updated",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
