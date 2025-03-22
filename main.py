from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

def start(update: Update, context: CallbackContext):
    update.message.reply_text(
        "Mini Appni ochish uchun quyidagi tugmani bosing:",
        reply_markup={
            "inline_keyboard": [[{"text": "Web Appni ochish", "web_app": {"url": "https://yourdomain.com/index.html"}}]]
        }
    )

def main():
    updater = Updater("7527335433:AAEzVZfIrvFfz9fBzvK1TsFRv3DBm6kw5W0", use_context=True)
    dp = updater.dispatcher
    dp.add_handler(CommandHandler("start", start))
    updater.start_polling()
    updater.idle()

if __name__ == "__main__":
    main()