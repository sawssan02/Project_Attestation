import {
  CheckCircleIcon ,
  ClockIcon,
  ExclamationCircleIcon,
  ArrowPathIcon
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "#004aad",
    icon: ArrowPathIcon,
    title: "Attestations générées",
    value: "500",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "#004aad",
    icon: ClockIcon,
    title: "Attestations en attente",
    value: "20",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "#004aad",
    icon: ExclamationCircleIcon,
    title: "Attestations échouées",
    value: "02",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "#004aad",
    icon: CheckCircleIcon,
    title: "Temps moyen",
    value: "30 min",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
