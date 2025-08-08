import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Notifications() {
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["gray", "green", "orange", "red"];

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
            <Alert
              key={"red"}
              open={showAlertsWithIcon["red"]}
              color={"red"}
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
              onClose={() => setShowAlertsWithIcon((current) => ({
                ...current,
                ["red"]: false,
              }))}
            >
              Attestation de "CIN" n'est pas générer essayer de le créer manuellement <a href="#" className="text-blue-900">ici </a>. 
            </Alert>
            <Alert
              key={"green"}
              open={showAlertsWithIcon["green"]}
              color={"green"}
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
              onClose={() => setShowAlertsWithIcon((current) => ({
                ...current,
                ["green"]: false,
              }))}
            >
              Les attestations de jours jj/mm/aaaa générer avec succes pour consulter <a href="#" className="text-blue-900">ici </a>. 
            </Alert>
        </CardBody>
      </Card>
    </div>
  );
}

export default Notifications;
