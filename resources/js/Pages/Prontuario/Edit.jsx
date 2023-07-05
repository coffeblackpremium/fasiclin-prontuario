import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {usePage} from "@inertiajs/react";
import {Navbar} from "@/Components/Navbar.jsx";

export default function Edit({prontuario}) {

    return (
        <div className={"md:h-screen bg-green-600 dark:bg-gray-900"}>
            <Navbar />
            <div className="mx-auto pt-24">
                <h2 className="text-3xl text-center mb-4 font-bold dark:text-white">Prontuário do Paciente: {prontuario.nome_cliente}</h2>
            </div>
            <div className="bg-white dark:bg-gray-700 mx-auto md:w-full max-w-7xl py-11 px-10 shadow rounded-lg">
                <form action="" className={"mt-5 md:mt-0"}>
                    <div className="md:grid md:grid-cols-2 md:gap-3 md:content-start flex flex-col justify-center">
                        <div className={"items-center max-w-xl"}>
                            <InputLabel for={"cpf_cliente"} value="CPF do Cliente"/>
                            <TextInput type="text" name="cpf_cliente" id={"cpf_cliente"} className={"block w-full mt-1 py-1"}
                                       value={prontuario.cpf_cliente} disabled>
                            </TextInput>
                            <InputError />
                        </div>
                        <div className={"max-w-xl items-center"}>
                            <InputLabel for="especialidade" value="Atendimento" />
                            <TextInput type="text" name="id_especiliadade" id="{especialidade}" className={"block w-full mt-1 py-1"}
                                       value={prontuario.nome_especialidade} disabled/>
                            <InputError />
                        </div>
                    </div>
                    <div className={"md:grid md:grid-cols-3 md:gap-4 mt-3 flex flex-col justify-center"}>
                        <div className={"items-center max-w-xl"}>
                            <InputLabel for="" value="Identificador do Profissional" />
                            <TextInput type="text" name="{id_cliente}" className={"block w-full mt-1 py-1"}
                                       value={prontuario.nome_profissional} disabled/>
                        </div>
                        <div className={"items-center max-w-xs md:px-4 md:mx-4"}>
                            <InputLabel for="id_data" value="Data"/>
                            <TextInput type={"prontuario.data_hora" ?? "date"} name="id_data" className={"block w-full mt-1 mr-2 px-2 py-1"}
                                       value={prontuario.data_abertura} disabled/>
                        </div>
                        <div className={"items-center max-w-full"}>
                            <InputLabel for="link" value="RIS e PACS" />
                            <TextInput type="file" name="link" className={"block w-full mt-1 py-1 "} />
                        </div>
                    </div>
                    <div className={"max-w-full"}>
                        <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>
                            Descrição
                        </label>
                        <div className={"flex items-center justify-center max-w-full md:space-y-3"}>
                            <textarea id="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900
                             bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva uma descrição.">

                            </textarea>
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
    );
}
