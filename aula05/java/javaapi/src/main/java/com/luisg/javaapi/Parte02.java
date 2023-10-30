package com.luisg.javaapi;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class Parte02 {
    
    public static void run() {
        int min = 1000;
        int max = 1999;
        System.out.println("Divisiveis por 11 com resto de 5 entre "
            + min + " e " + max + ": \n"
            + div11resta5(min, max) + "\n");

        min = 0;
        max = 1000;
        Map<String, Integer> valores = GetParesImparesQuant(min, max);
        System.out.println("Entre " + min + " e " + max + " temos: "
            + "\n> " + valores.get("par") + " números pares"
            + "\n> " + valores.get("impar") + " números impares");


        Funcionario funcionario01 = new Funcionario("Roberto", 53, "Gerente", 12000);
        Funcionario funcionario02 = new Funcionario("Marcos", 20, "Desenvolvedor", 2000);

        Usuario usuario01 = new Usuario("paulavadinhu", 14);
        Usuario usuario02 = new Usuario("mayck3000", 20);

        System.out.println(funcionario01);
        System.out.println(funcionario02);

        System.out.println(usuario01);
        System.out.println(usuario02);
        System.out.println();

        Funcionario[] funcionariosVetor = new Funcionario[2];
        funcionariosVetor[0] = funcionario01;
        funcionariosVetor[1] = funcionario02;
        System.out.println(funcionariosVetor);
        System.out.println();

        ArrayList<Funcionario> funcionariosLista = new ArrayList<Funcionario>();
        funcionariosLista.add(funcionario01);
        funcionariosLista.add(funcionario02);
        System.out.println(funcionariosLista);
        System.out.println();

        int maxNum = InMax();
        if (maxNum != Integer.MIN_VALUE)
            System.out.println("O maior número digitado foi: " + maxNum);
    }

    public static ArrayList<Integer> div11resta5(int min, int max) {
        ArrayList<Integer> nums = new ArrayList<Integer>();

        for (int i = min; i < max + 1; i++) {
            if(i % 11 == 5)
                nums.add(i);
        }

        return nums;
    }

    public static Map<String, Integer> GetParesImparesQuant(int min, int max) {
        int pares = 0;
        int impares = 0;

        for(int i = min; i < max + 1; i++) {
            if (i % 2 == 0) {
                pares++;
            } else {
                impares++;
            }
        }

        Map<String, Integer> valores = new HashMap<>();
        valores.put("par", pares);
        valores.put("impar", impares);
        return valores;
    }

    public static int InMax() {
        int max = Integer.MIN_VALUE;

        try (Scanner scan = new Scanner(System.in)) {
            String input = "\n";

            System.out.println("Digite números:");
            while (input != "") {
                System.out.print("> ");
                input = scan.nextLine();

                if (Integer.parseInt(input) > max)
                    max = Integer.parseInt(input);
            }
        } catch (NumberFormatException e) {
            System.out.println("Finalizando leitura...");
        }

        return max;
    }
}
