package com.luisg.javaapi;

public class Parte03 {
    public static void run() {
        System.out.print("Digite o texto: \n> ");
        String text = Input.nextLine();

        System.out.println("O meio do texto é: " + MiddleOne(text));
    }

    public static String MiddleOne(String text) {
        System.out.println(text);
        text = text.replace("\n", " ");
        text = text.replace("  ", " ");

        String[] textArray = text.split(" ");

        if(textArray.length % 2 == 0)
            return textArray[textArray.length / 2 - 1] + " " + textArray[textArray.length / 2];

        return textArray[(textArray.length - 1) / 2];
    }
}
