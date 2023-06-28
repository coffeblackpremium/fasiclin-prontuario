import React from 'react';
import ReactDOM from 'react-dom';

export default function Index() {
    return (
        <div className="flex items-center justify-center h-screen bg-green-600">
            <div className="bg-white mx-auto w-full max-w-xl py-11 px-10 shadow rounded-lg">
                <h2 className="text-3xl text-center mb-4 font-bold">Prontuário</h2>
                <form action="">
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2 text-center">
                            <input
                                type="text"
                                placeholder="Id do cliente"
                                className="appearance-none block w-full px-4 sm:px-20 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                            />
                        </div>
                        <div className="w-1/2 ml-2 text-center">
                            <input
                                type="text"
                                placeholder="Id Especialidade"
                                className="appearance-none block w-full px-4 sm:px-20 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2 text-center">
                            <input
                                type="text"
                                placeholder="Id Procedimento"
                                className="appearance-none block w-full px-4 sm:px-20 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                            />
                        </div>
                        <div className="w-1/2 ml-2 text-center">
                            <input
                                type="text"
                                placeholder="Id Profissional da Saúde"
                                className="appearance-none block w-full px-4 sm:px-20 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2 text-center">
                            <input
                                type="text"
                                placeholder="Autenticado"
                                className="appearance-none block w-full px-4 sm:px-20 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                            />
                        </div>
                        <div className="w-1/2 ml-2 text-center">
                            <input
                                type="text"
                                placeholder="Link Docs/Ris/Pacs"
                                className="appearance-none block w-full px-4 sm:px-20 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                            />
                        </div>
                    </div>
                    <textarea
                        placeholder="Descrição do Prontuário"
                        className="w-full px-4 sm:px-20 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                    ></textarea>
                    <div className="mb-4">
                        <button className="inline-block w-full px-8 py-4 leading-none text-white bg-green-600 hover:bg-gray-700 font-semibold rounded shadow">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
