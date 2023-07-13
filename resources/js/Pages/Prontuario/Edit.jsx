import React from 'react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Link, useForm} from "@inertiajs/react";
import {Navbar} from "@/Components/Navbar.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import PaginationLinks from "@/Components/Pagination.jsx";

export default function Edit({prontuario, prontuarios}) {

    const {data, setData, post, processing, errors, reset, progress} = useForm({
        cpf_cliente: prontuario.cpf_cliente,
        data_abertura: prontuario.data_abertura,
        id_especialidade: prontuario.id_especialidade,
        id_profissional_de_saude: null,
        id_procedimentos: prontuario.id_procedimentos,
        descricao: '',
        link: null,

    })
    console.log(prontuarios)

    function submit(e) {
        e.preventDefault();
        post(route('prontuario.store', {cpfCliente: prontuario.cpf_cliente, dataAbertura: prontuario.data_abertura}));
    }

    return (
        <div className={'bg-green-600 dark:bg-gray-900'}>
            <div className={""}>
                <Navbar/>
                <div className="mx-auto pt-24">
                    <h2 className="text-3xl text-center mb-4 font-bold dark:text-white">Prontuário do
                        Paciente: {prontuario.nome_cliente}</h2>
                </div>
                <div className="bg-white dark:bg-gray-700 mx-auto md:w-full max-w-7xl py-11 px-10 shadow rounded-lg">
                    <form onSubmit={submit} className={"mt-5 md:mt-0"}>
                        <div className="md:grid md:grid-cols-2 md:gap-3 md:content-start flex flex-col justify-center">
                            <div className={"items-center max-w-xl"}>
                                <InputLabel for={"cpf_cliente"} value="CPF do Cliente"/>
                                <TextInput type="text" name="cpf_cliente" id={"cpf_cliente"}
                                           className={"block w-full mt-1 py-1"}
                                           value={prontuario.cpf_cliente} disabled>
                                </TextInput>
                                <InputError/>
                            </div>
                            <div className={"max-w-xl items-center"}>
                                <InputLabel for="especialidade" value="Atendimento"/>
                                <TextInput type="text" name="id_especiliadade" id="especialidade"
                                           className={"block w-full mt-1 py-1"}
                                           value={prontuario.nome_especialidade} disabled/>
                                <InputError/>
                            </div>
                        </div>
                        <div className={"md:grid md:grid-cols-3 md:gap-4 mt-3 flex flex-col justify-center"}>
                            <div className={"items-center max-w-xl"}>
                                <InputLabel for="{id_profissional}" value="Identificador do Profissional"/>
                                <TextInput type="text" name="{id_profissional}"
                                           onChange={e => setData('id_profissional_de_saude', e.target.value)}
                                           id="id_profissional" className={"block w-full mt-1 py-1"}
                                />
                            </div>
                            <div className={"items-center max-w-xs md:px-4 md:mx-4"}>
                                <InputLabel for="id_data" value="Data"/>
                                <TextInput type={"prontuario.data_hora" ?? "date"} name="id_data"
                                           className={"block w-full mt-1 mr-2 px-2 py-1"}
                                           value={prontuario.data_abertura} disabled/>
                            </div>
                            <div className={"items-center max-w-full"}>
                                <InputLabel for="link" value="RIS e PACS"/>
                                <input type="file" name="link" className={"block w-full mt-1 py-1 "} accept={''}
                                       value={data.link}
                                       disabled
                                       onError={e => setData('link', e.target.files[0].name)}
                                       onChange={e => setData('link', e.target.files[0].name)}/>
                                {progress && (
                                    <progress value={progress.percentage} max="100">
                                        {progress.percentage}%
                                    </progress>
                                )}
                            </div>
                        </div>
                        <div className={"max-w-full"}>
                            <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>
                                Descrição
                            </label>
                            <div className={"flex items-center justify-center max-w-full md:space-y-3"}>
                                <textarea id="descricao" rows="3" name="descricao" value={data.descricao}
                                          onChange={e => setData('descricao', e.target.value)} className="block p-2.5 w-full text-sm text-gray-900
                                 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Escreva uma descrição.">
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
                <div className={'md:max-w-7xl mx-auto mt-12 my-5'}>
                    <div className={'flex justify-start'}>
                        <h1 className={'text-2xl dark:text-white font-semibold font-sans'}>
                            Prontuarios do Paciente</h1>
                    </div>
                </div>
                {prontuarios.data.map(prontuarioGeral => (

                    <div className={'bg-white dark:bg-gray-700 mx-auto md:max-w-7xl mb-12 rounded-md'}>
                        <div className={'rounded p-2'}>
                            <div key={prontuarioGeral.data_abertura}
                                 className={'text-md dark:text-white font-sans flex justify-between'}>
                                <h1>Data: <span className={'font-bold'}>{prontuarioGeral.data_abertura}</span></h1>
                                <h1>Procedimento:{prontuarioGeral.nome_especialidade}</h1>
                                <h1>Identificador do Profissional: {prontuarioGeral.id_profissional_de_saude}</h1>
                                <PrimaryButton>
                                    <Link href={'/prontuario/' + prontuario.cpf_cliente + '/' + prontuario.data_abertura + '/show'}>
                                        <FontAwesomeIcon icon={faEye}/>
                                    </Link>
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>

                ))}
                <div className={'max-w-7xl mx-auto mt-10'}>
                    <div className={"flex justify-start"}>
                        <PaginationLinks pagination={prontuarios} links={prontuarios.links} meta={prontuarios.meta}/>
                    </div>
                </div>
            </div>

        </div>
    );
}
