import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Colégio Montenegro" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
   <>
   <div className="flex flex-col justify-center content-center h-screen">
    <h1 className="text-blue-900 text-center font-bold text-6xl">Colégio Montenegro</h1>
    
    <div className="flex flex-col justify-center py-16">
    <h2 className="text-center font-bold text-2xl">Contato</h2>

    <div className="flex justify-center gap-8 py-6 font-medium">
      <div className="flex gap-2">
    <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="mail"></img>
    <p>contato@colegiomontenegro.com.br</p>
      </div>

      <div className="flex gap-2">
    <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="instagram"></img>
    <p>@colegiomontenegro_</p>
      </div>

      <div className="flex gap-2">
    <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/597/597177.png" alt="phone"></img>
    <p>(75)992331534</p>
    </div>

    </div>
    </div>

    </div>
   </> 
  );
}
