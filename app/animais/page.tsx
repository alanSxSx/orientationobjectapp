'use client'

import React, { Component, FormEvent } from "react";

interface AnimalProps {
    nome: string;
    especie: string;
    cor: string;
    som: string;
}

class Animal extends Component<AnimalProps> {
    
    render() {
        const { nome, especie, cor, som } = this.props;

        return (
            <div className="flex flex-col justify-center items-center border w-52 p-3">
                <p><b>Nome:</b> {nome}</p>
                <p><b>Espécie:</b> {especie}</p>
                <p><b>Cor:</b> {cor}</p>
                <p><b>Som:</b> {som}</p>
            </div>
        );
    }

}

interface State {
    animais: AnimalProps[];
}

class Animais extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            animais: [
                { nome: "Rex", especie: "Canino", cor: "Marrom", som: "Au au!" },
                { nome: "Mittens", especie: "Felino", cor: "Branco", som: "Miau!" }
            ]
        };
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const nome = form.nome.value;
        const especie = form.especie.value;
        const cor = form.cor.value;
        const som = form.som.value;
        const novoAnimal: AnimalProps = { nome, especie, cor, som };
        this.setState((prevState) => ({
            animais: [...(prevState?.animais || []), novoAnimal]
        }));
        form.reset();
    };


    render() {
       
        return (
            <>
            <h1 className="flex items-center justify-center mt-10">Crie seu Animal</h1>
            <form className="flex flex-col items-center justify-center mt-8 gap-3" onSubmit={this.handleSubmit}>
                <label className="flex">
                    <p className="w-16">Nome:</p>
                    <input type="text" className="border ml-2 justify-end items-end" name="nome" />
                </label>
                <label className="flex">
                <p className="w-16">Espécie:</p>
                    <input type="text" className="border ml-2" name="especie"/>
                </label>
                <label className="flex">
                <p className="w-16">Cor:</p>
                    <input type="text" className="border ml-2" name="cor"/>
                </label>
                <label className="flex">
                <p className="w-16">Som:</p>
                    <input type="text" className="border ml-2" name="som"/>
                </label>
                <button type="submit" className="border w-20">Enviar</button>
            </form>

            <main className="flex gap-2 justify-center items-center mt-8">
                {this.state.animais.map((animal, index) => (
                    <Animal key={index} {...animal} />
                ))}
            </main>
            </>
        );
    }
}



export default Animais