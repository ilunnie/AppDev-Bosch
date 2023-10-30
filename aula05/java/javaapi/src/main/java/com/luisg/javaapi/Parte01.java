package com.luisg.javaapi;

import java.util.ArrayList;

public class Parte01 {

    public static void run() {
		Aluno burro = new Aluno("Nerdola", 13);
		Aluno genio = new Aluno("Burrão", 14);

		burro.setNota(2.5f, 0);
		burro.setNota(5f, 1);
		burro.setNota(6f, 2);
		burro.setNota(4.2f, 3);                                             
		System.out.println(burro.getNome() +
			": \n> Soma: " + sumArray(burro.GetNotas().toArray(new Float[0])) +
			"\n> Média: " + meanList(burro.GetNotas()) + "\n");

		genio.setNota(7.5f, 0);
		genio.setNota(8f, 1);
		genio.setNota(6.5f, 2);
		genio.setNota(6f, 3);
		System.out.println(genio.getNome() +
			": \n> Soma: " + sumArray(genio.GetNotas().toArray(new Float[0])) +
			"\n> Média: " + meanList(genio.GetNotas()) + "\n");
	}

    public static float sumArray(Float[] array) {
		Float sum = 0f;
		for (Float num : array) {
			sum += num;
		}
		return sum;
	}

	public static float meanList(ArrayList<Float> list) {
		Float sum = 0f;
		for (Float num : list) {
			sum += num;
		}
		return sum / list.size();
	}
}
