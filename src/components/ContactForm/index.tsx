import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
} from "@chakra-ui/react";

export const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null!);
	const toast = useToast();

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = () => {
		emailjs
			.sendForm(
				"gmail_message_service",
				"template_s4jlzkf",
				form.current,
				"XilHcYdxDuoGWVzPR"
			)
			.then(
				(_) => {
					toast({
						title: "Email enviado",
						description: "Seu email foi enviado com sucesso",
						status: "success",
						duration: 6000,
						isClosable: true,
					});
				},
				(_) => {
					toast({
						title: "Tente novamente",
						description: "Falha no envio do email",
						status: "error",
						duration: 6000,
						isClosable: true,
					});
				}
			);
	};

	return (
		<form ref={form} onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={!!errors.name}>
				<FormLabel htmlFor="name">First name</FormLabel>
				<Input
					id="name"
					placeholder="Digite seu nome"
					{...register("name", {
						required: "Campo obrigatório",
					})}
				/>
				<FormErrorMessage>
					{errors.name && errors.name.message}
				</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={!!errors.email}>
				<FormLabel htmlFor="email">Seu email</FormLabel>
				<Input
					id="email"
					placeholder="Digite seu email"
					{...register("email", {
						required: "Campo obrigatório",
						pattern: {
							value: /^\S+@\S+$/i,
							message: "Digite um email válido",
						},
					})}
				/>
				<FormErrorMessage>
					{errors.email && errors.email.message}
				</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={!!errors.message}>
				<FormLabel htmlFor="message">Deixe sua mensagem</FormLabel>
				<Input
					id="message"
					placeholder="Deixe a sua mensagem"
					{...register("message", {
						required: "Campo obrigatório",
					})}
				/>
				<FormErrorMessage>
					{errors.message && errors.message.message}
				</FormErrorMessage>
			</FormControl>
			<Button
				mt={4}
				colorScheme="teal"
				isLoading={isSubmitting}
				type="submit"
			>
				Submit
			</Button>
		</form>
	);
};
