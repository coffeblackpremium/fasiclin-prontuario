import React from 'react';
import {Navbar} from "@/Components/Navbar.jsx";
import imageFasipe from '/storage/app/public/images/logo-unifasipe.png';
import {Table} from "@/Components/Table.jsx";
import Pagination from "@/Components/Pagination.jsx";
import PaginationLinks from "@/Components/Pagination.jsx";

export default function Index({prontuarios}) {
    return (
        <div className="max-w-full mx-auto bg-green-600 dark:bg-gray-900">
            <Navbar/>
            <div className='mx-auto mt-24 text-center'>
                <h2 className="text-3xl md:mx-auto font-bold dark:text-white mt-14">Sistema de Prontuario</h2>
                <span className='text-sm md:mx-auto font-bold italic dark:text-white'>
                    Painel principal do Sistema de prontuario
                </span>
                <img src={imageFasipe} alt="" className='w-1/2 mx-auto md:rounded-lg md:mt-12'/>
            </div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white dark:bg-gray-500 mx-auto md:w-full py-10 px-10 shadow rounded-lg">
                    <Table prontuarios={prontuarios.data} />
                    <div className={"justify-start"}>
                        <PaginationLinks pagination={prontuarios} links={prontuarios.links} meta={prontuarios.meta}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
