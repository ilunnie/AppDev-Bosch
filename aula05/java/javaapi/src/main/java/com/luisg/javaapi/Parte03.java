package com.luisg.javaapi;

import java.util.Scanner;

public class Parte03 {
    public static void run() {
        try (Scanner scan = new Scanner(System.in)) {
            System.out.println("Digite o texto: \n> ");
            String text = scan.nextLine();

            System.out.println("O meio do texto é: " + MiddleOne(text));
        }
    }

    public static String MiddleOne(String text) {
        text = text.replace("\n", " ");
        text = text.replace("  ", " ");

        System.out.println(text.split(" "));

        return text;
    }
}
