import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Divider, Heading, Stack, Textarea, useToast } from "@chakra-ui/react";

import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
	Box,
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
		<Box w="100%" borderRadius={6} color="gray.50" bgColor="gray.700" p={4}>
			<Heading as="h3" fontSize="2xl" mb={6}>
				Email
			</Heading>

			<form ref={form} onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={4} w="100%">
					<FormControl isInvalid={!!errors.name} w="100%">
						<FormLabel htmlFor="name">Seu nome</FormLabel>
						<Input
							id="name"
							placeholder="Digite seu nome"
							{...register("name", {
								required: "Campo obrigatório",
							})}
							bgColor="gray.700"
							borderColor={"gray.600"}
							h={12}
							w="100%"
						/>
						<FormErrorMessage>
							{errors.name && errors.name.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={!!errors.email} w="100%">
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
							bgColor="gray.700"
							borderColor={"gray.600"}
							h={12}
							w="100%"
						/>
						<FormErrorMessage>
							{errors.email && errors.email.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={!!errors.message} w="100%">
						<FormLabel htmlFor="message">
							Deixe sua mensagem
						</FormLabel>
						<Textarea
							id="message"
							placeholder="Deixe a sua mensagem"
							{...register("message", {
								required: "Campo obrigatório",
							})}
							bgColor="gray.700"
							borderColor={"gray.600"}
							h={12}
							w="100%"
						/>
						<FormErrorMessage>
							{errors.message && errors.message.message}
						</FormErrorMessage>
					</FormControl>
				</Stack>
				<Button
					mt={4}
					colorScheme="cyan"
					isLoading={isSubmitting}
					type="submit"
					w="100%"
					h={12}
				>
					Enviar mensagem
				</Button>
			</form>
		</Box>
	);
};
