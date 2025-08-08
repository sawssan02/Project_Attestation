import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";


export function SignIn() {
  return (
    <section className="flex gap-4">
      <div className="w-full lg:w-3/5 mt-20">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4 text-[#004aad]">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Entre votre CIN et mot de passe pour se connecter.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
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
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Mot de passe
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
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
            Sign In
          </Button>
            </NavLink>
          <div className="flex items-center justify-between gap-2 mt-6">
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">
                Mot de passe oublié ?
              </a>
            </Typography>
          </div>
        </form>

      </div>
      <div className="w-2/5 h-96 mt-20 hidden lg:block">
        <img
          src="/img/logo-CMR.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default SignIn;
