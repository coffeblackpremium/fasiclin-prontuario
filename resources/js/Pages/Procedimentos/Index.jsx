import React from 'react';
import {Navbar} from "@/Components/Navbar.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Index({procedimentos}) {

    return (
        <div className={'bg-green-600 dark:bg-gray-900'}>
            <div className={""}>
                <Navbar/>
                <div className="mx-auto pt-24">
                    <h2 className="text-3xl text-center mb-4 font-bold dark:text-white">Procedimentos</h2>
                </div>
                <div className="bg-white dark:bg-gray-700 mx-auto md:w-full max-w-7xl py-11 px-10 shadow rounded-lg">
                    <form className={"mt-5 md:mt-0"}>
                        <div className="md:grid md:grid-cols-2 md:gap-3 md:content-start flex flex-col justify-center">
                            <div className={"items-center max-w-xl"}>
                                <InputLabel for={"cpf_cliente"} value="CPF do Cliente"/>
                                <TextInput type="text" name="cpf_cliente" id={"cpf_cliente"}
                                           className={"block w-full mt-1 py-1"}
                                           disabled>
                                </TextInput>
                                <InputError/>
                            </div>
                            <div className={"max-w-xl items-center"}>
                                <InputLabel for="especialidade" value="Atendimento"/>
                                <TextInput type="text" name="id_especiliadade" id="especialidade"
                                           className={"block w-full mt-1 py-1"}
                                           disabled/>
                                <InputError />
                            </div>
                        </div>
                        <div className={"flex items-center justify-center md:pt-5"}>
                            <PrimaryButton type="submit">
                                Salvar
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
