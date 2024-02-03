from translate import Translator
def translate_text(text):
    translator= Translator(to_lang="de")
    translation = translator.translate(text)
    return translation

while(True):
    # Displaying some common german words to the user
    print("Some common German words are: ")
    print("1. Hallo (Hello)")
    print("2. Guten Morgen (Good Morning)")
    print("3. Guten Tag (Good Afternoon)")
    print("4. Guten Abend (Good Evening)")
    print("5. Auf Wiedersehen (Goodbye)")
    print("=====================================")
    # Taking input from the user
    text = input("Enter the text you want to translate: ")
    target_language = "de"
    print("The translated text is: ", translate_text(text))
    print("=====================================")
    # Asking the user if they want to translate more text
    choice = input("Do you want to translate more text? (yes/no): ")
    if choice == "no":
        break
    else:
        continue