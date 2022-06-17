import { useForm } from "react-hook-form";
import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
} from "@chakra-ui/react";

interface ContactData {
	subject: string;
	name: string;
	email: string;
	message: string;
	[x: string]: any;
}

export const ContactForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<ContactData>();

	function onSubmit(values: ContactData) {
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve(null);
			}, 3000);
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={!!errors.name}>
				<FormLabel htmlFor="name">First name</FormLabel>
				<Input
					id="name"
					placeholder="Digite seu nome"
					{...register("name", {
						required: "Campo obrigatório",
						minLength: {
							value: 4,
							message: "Minimum length should be 4",
						},
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
						minLength: {
							value: 4,
							message: "Minimum length should be 4",
						},
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
