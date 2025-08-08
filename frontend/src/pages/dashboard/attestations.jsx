import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,

} from "@material-tailwind/react";
import { EyeIcon, PencilIcon, ArrowDownTrayIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { attestationsTableData, projectsTableData } from "@/data";

export function Attestations() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" style={{background:"#004aad"}} className="mb-8 p-6 flex items-center justify-between">
          <Typography variant="h6" color="white">
            Table Attestations
          </Typography>
          <AdjustmentsHorizontalIcon strokeWidth={2} className="h-5 w-5 text-white" />
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Fichiers", "Date", "visualise",  ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attestationsTableData.map(
                ({ img, name, date, visualise }, key) => {
                  const className = `py-3 px-5 ${
                    key === attestationsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={"py-3 px-6 flex items-center gap-x-4"}>
                        <EyeIcon strokeWidth={1.5} className="h-5 w-5 text-blue-500" />
                        <PencilIcon strokeWidth={1.5} className="h-5 w-5 text-green-800" />
                        <ArrowDownTrayIcon strokeWidth={1.5} className="h-5 w-5 text-green-800" />
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      
      
    </div>
  );
}

export default Attestations;
