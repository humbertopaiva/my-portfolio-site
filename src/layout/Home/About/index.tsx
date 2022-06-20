import { AboutBox } from "../../../components/AboutBox";
import { Education } from "../../../components/Education";
import { FullWidthContainer } from "../../../components/FullWidthContainer";

export const About = () => {
	return (
		<FullWidthContainer pb={16}>
			<AboutBox
				text="Desde que me formei, em 2018, nunca parei de buscar conhecimento e de
experimentar as diversas possibilidades que a área de Comunicação Social
oferece. E, procurando por novas tecnologias e ferramentas que pudessem
melhorar o meu trabalho e os resultados dos meus clientes, acabei
envolvido no mundo do Desenvolvimento Web. Dessa forma, permaneci
buscando conhecimentos para me tornar um bom programador, o que
despertou em mim a vontade de me profissionalizar como um
Desenvolvedor Front-End, trazendo toda a bagagem de aprendizado que
conquistei trabalhando com marketing digital e design de marcas, para a
área de desenvolvimento de softwares."
			/>
			<Education />
		</FullWidthContainer>
	);
};
