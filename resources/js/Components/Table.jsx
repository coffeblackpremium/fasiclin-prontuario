import React, {useState} from "react";
import {Link} from "@inertiajs/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faLink} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import DangerButton from "@/Components/DangerButton.jsx";

export function Table({prontuarios}) {
    const [search, setSearch] = useState('');

    return (
        <div className='p-4 bg-white rounded-lg shadow-xs dark:bg-gray-600'>
            <div className="mb-3">
                <div className="relative mb-4 flex md:max-w-3xl md:mx-auto flex-wrap items-stretch">
                    <input
                        type="search"
                        className="relative m-0 -mr-0.1 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Buscar Paciente"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search"
                        aria-describedby="button-addon"/>
                </div>
            </div>
            <div className="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
                <div className='overflow-x-auto w-full md:mx-auto'>
                    <table className='whitespace-no-wrap md:mx-auto md:w-full'>
                        <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                            <td className='px-4 py-3 w-64 whitespace-nowrap'>CPF do Paciente</td>
                            <td className='px-4 py-3 whitespace-nowrap'>Nome do Paciente</td>
                            <td className='px-4 py-3'>Procedimento</td>
                            <td className='px-4 py-3'>Atendimento</td>
                            <td className='px-4 py-3 whitespace-nowrap'>Link</td>
                            <td className='px-4 py-3 w-64 text-center'>Data e hora da consulta</td>
                            <td className='px-4-py-3 whitespace-nowrap md:text-center'>
                                Ações
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {prontuarios.filter((prontuario) => {
                            return search.toLowerCase() === '' ? prontuario : prontuario.cpf_cliente.includes(search)
                        }).map((prontuario) => (
                            <tr key={prontuario.data_abertura}>
                                <td className='px-4 py-3 bg-white'>{prontuario.cpf_cliente}</td>
                                <td className='px-4 py-3 bg-white'>{prontuario.nome_cliente}</td>
                                <td className='px-4 py-3 bg-white'>{prontuario.procedimento}</td>
                                <td className='px-4 py-3 bg-white'>{prontuario.nome}</td>
                                <td className='px-4 py-3 bg-white'>
                                    <Link href={prontuario.link}>
                                        <FontAwesomeIcon icon={faLink}/>
                                    </Link>
                                </td>
                                <td className='px-4 py-3 bg-white w-64 text-center'>{prontuario.data_abertura}</td>
                                <td className='px-4 py-3 bg-white white text-center'>
                                    <PrimaryButton className='mr-2'>
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </PrimaryButton>
                                    <DangerButton className='mr-2'>
                                        Teste
                                    </DangerButton>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
