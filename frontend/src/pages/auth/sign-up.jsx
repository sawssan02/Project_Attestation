import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";


export function SignUp() {
  return (
    <section className=" flex">
      <div className="w-2/5 h-96 mt-20 hidden lg:block">
        <img
          src="/img/logo-CMR.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center mt-18">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4 text-[#004aad]">Inscription</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Saisissez vos informations personnelles.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Prénom
            </Typography>
            <Input
              size="lg"
              placeholder="Prénom"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Nom
            </Typography>
            <Input
              size="lg"
              placeholder="Nom"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Opérateur
            </Typography>
            <Input
              size="lg"
              placeholder="Opérateur"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Numéro de téléphone
            </Typography>
            <Input
              size="lg"
              placeholder="EX:06********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              CIN
            </Typography>
            <Input
              size="lg"
              placeholder="CIN"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                J'accepte&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  les conditions générales
                </a>
                &nbsp;d'utilisation
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <NavLink to={`/`}>
            <Button className="mt-6 bg-[#004aad]" fullWidth>
              Suivant
            </Button>
          </NavLink>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            J'ai un compte?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Se connecter</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
