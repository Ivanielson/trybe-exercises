class Log:
    def dispara_log(self, message):
        return message


class LogSuccess:
    def __init__(self, log: Log):
        self.log = log

    def color_msg(self, color):
        return {
            "ROSA": "\033[95m",
            "ROXO": "\033[94m",
            "AZUL": "\033[96m",
            "VERDE": "\033[92m",
            "LARANJA": "\033[93m",
            "VERMELHO": "\033[91m",
            "NEGRITO": "\033[1m",
            "SUBLINHADO": "\033[4m",
            "RESET": "\033[0m",
        }.get(color.upper())

    def Success(self, cor):
        cor = self.color_msg(cor)
        return self.log.dispara_log(
            f"{cor}O sistema está funcionando{cor}"
        )


class LogWarning:
    def __init__(self, log: Log):
        self.log = log

    def color_msg(self, color):
        return {
            "ROSA": "\033[95m",
            "ROXO": "\033[94m",
            "AZUL": "\033[96m",
            "VERDE": "\033[92m",
            "LARANJA": "\033[93m",
            "VERMELHO": "\033[91m",
            "NEGRITO": "\033[1m",
            "SUBLINHADO": "\033[4m",
            "RESET": "\033[0m",
        }.get(color.upper())

    def Warning(self, color):
        cor = self.color_msg(color)
        return self.log.dispara_log(
            f"{cor}O sistema está lento{cor}"
        )


class LogError:
    def __init__(self, log: Log):
        self.log = log

    def color_msg(self, color):
        return {
            "ROSA": "\033[95m",
            "ROXO": "\033[94m",
            "AZUL": "\033[96m",
            "VERDE": "\033[92m",
            "LARANJA": "\033[93m",
            "VERMELHO": "\033[91m",
            "NEGRITO": "\033[1m",
            "SUBLINHADO": "\033[4m",
            "RESET": "\033[0m",
        }.get(color.upper())

    def Error(self, color):
        cor = self.color_msg(color)
        return self.log.dispara_log(
            f"{cor}O sistema está com erros{cor}"
        )


if __name__ == "__main__":
    log = Log()
    log.dispara_log("Teste")
    success = LogSuccess(log)
    print(success.Success("Verde"))
    warning = LogWarning(log)
    print(warning.Warning("Laranja"))
    error = LogError(log)
    print(error.Error("Vermelho"))