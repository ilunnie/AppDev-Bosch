package com.luisg.javaapi;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

class Input {
    private static Scanner scanner = new Scanner(System.in, "UTF-8");

    public static String nextLine() {
        return scanner.nextLine();
    }

    public static void close() {
        scanner.close();
    }
}

class Pessoa {
	@Getter @Setter(AccessLevel.PRIVATE) private String nome;
	@Getter @Setter private int idade;
    @Getter private String cpf = "";

	public Pessoa(String _nome, int _idade) {
        this.setNome(_nome);
		this.setIdade(_idade);;
	}

    public void setCpf(String _cpf) {
        if (_cpf == "") {
            this.cpf = _cpf;
        }
    }
}

class Aluno extends Pessoa {
	private Float[] nota = new Float[4];

	public float GetNota(int index) { return this.nota[index]; }
	public void setNota(float nota, int index) { this.nota[index] = nota; }

	public Aluno(String _nome, int _idade) {
		super(_nome, _idade);
	}

	public ArrayList<Float> GetNotas() {
		ArrayList<Float> notas = new ArrayList<Float>(Arrays.asList(this.nota));
		return notas;
	}
}

class Funcionario extends Pessoa {
    @Getter @Setter String cargo;
    @Getter @Setter Float salario;

    public Funcionario(String _nome, int _idade, String _cargo, float _salario) {
        super(_nome, _idade);
        this.cargo = _cargo;
        this.salario = _salario;
    }
}

class Usuario extends Pessoa {
    public Usuario(String _nome, int _idade) {
        super(_nome, _idade);
    }
}