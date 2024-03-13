import { ChangeEvent, FormEvent, useState } from "react";

const Controller = () => {

  type user = {
    nombre: string,
    apellido: string
  }

  const [value, setValue] = useState<user>({
    nombre: " David",
    apellido: " Moody "
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value.nombre, value.apellido)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValue(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <h1>Controller</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="nombre" value={value.nombre} onChange={handleChange} />
        </p>
        <p>
          <input type="text" name="apellido" value={value.apellido} onChange={handleChange} />
        </p>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export { Controller };
