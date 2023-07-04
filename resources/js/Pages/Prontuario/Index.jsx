import React from 'react';
import {Navbar} from "@/Components/Navbar.jsx";
import {render} from "react-dom";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import DangerButton from "@/Components/DangerButton.jsx";
import imageFasipe from'/storage/app/public/images/logo-fasipe.png';




export default function Index({prontuarios}) {
    let items = [];

    for (const prontuario of prontuarios ) {
        items.push(<tr key={prontuario.id}>
            <td className='px-4 py-3 bg-white'>{prontuario.cpf_cliente}</td>
            <td className='px-4 py-3 bg-white'>{prontuario.nome_cliente}</td>
            <td className='px-4 py-3 bg-white'>{prontuario.procedimento}</td>
            <td className='px-4 py-3 bg-white'>{prontuario.nome}</td>
            <td className='px-4 py-3 bg-white'>{prontuario.link}</td>
            <td className='px-4 py-3 bg-white w-64 text-center'>{prontuario.data_abertura}</td>
            <td className='px-4 py-3 bg-white'>
                <PrimaryButton>
                    <FontAwesomeIcon icon={faEdit} />
                </PrimaryButton>
                <DangerButton>
                    Teste
                </DangerButton>
            </td>
        </tr>)
    }
    return (
        <div className="max-w-full mx-auto bg-green-600 dark:bg-gray-900">
            <Navbar />
            <div className='mx-auto mt-24 text-center'>
                <h2 className="text-3xl md:mx-auto font-bold dark:text-white mt-14">Sistema de Prontuario</h2>
                <span className='text-sm md:mx-auto font-bold italic dark:text-white'>
                    Painel principal do Sistema de prontuario
                </span>
                    <img src={imageFasipe} alt="" className='w-1/2 mx-auto md:rounded-lg md:mt-12'/>
            </div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white dark:bg-gray-500 mx-auto md:w-full py-10 px-10 shadow rounded-lg">
                    <div className="mb-3">
                        <div className="relative mb-4 flex md:max-w-3xl md:mx-auto flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 -mr-0.1 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Buscar Paciente"
                                aria-label="Search"
                                aria-describedby="button-addon3"/>
                            <button
                                className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                type="button"
                                id="button-addon3">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className='p-4 bg-white rounded-lg shadow-xs dark:bg-gray-600'>
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
                                            <td className='px-4 py-3 w-64 text-right'>Data e hora da consulta</td>
                                            <td className='px-4-py-3 whitespace-nowrap text-center'>
                                                Ações
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items}
                                        {/*{prontuario.map((value, index) => {*/}
                                        {/*    return (*/}
                                        {/*        <td className='px-4 py-3 bg-white'>{value.cpf_cliente}</td>*/}
                                        {/*        <td className='px-4 py-3 bg-white'>{value.descricao}</td>*/}
                                        {/*        <td className='px-4 py-3 bg-white'>{value.cpf_cliente}</td>*/}
                                        {/*    )*/}
                                        {/*    }*/}
                                        {/*)}*/}
                                        {/*<td className='px-4 py-3 bg-white'>Nome do Paciente</td>*/}
                                        {/*<td className='px-4 py-3 bg-white'>CPF do Paciente</td>*/}
                                        {/*<td className='px-4 py-3 bg-white'>Procedimento</td>*/}
                                        {/*<td className='px-4 py-3 bg-white'>Especialidade</td>*/}
                                        {/*<td className='px-4 py-3 bg-white'>Link</td>*/}
                                        {/*<td className='px-4 py-3 bg-white w-64 text-center'>Chacal</td>*/}
                                        {/*<td className='px-4 py-3 bg-white text-center'>Chacal</td>*/}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
