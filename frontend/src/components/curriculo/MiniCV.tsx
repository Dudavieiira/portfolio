import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse gap-6 xl:flex-row md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-50 min-h-60 xl:self-end mx-auto flex justify-center">
				<Image
					src="/minha-foto.png"
					alt="Foto de Perfil"
					layout="intrinsic"
					width={200}
					height={300}
				/>
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                    bg-gradient-to-r from-red-500 via-white to-white
                    text-transparent bg-clip-text text-2xl font-bold
                    "
					>
						Maria Eduarda
					</span>
					<span>Estudante de Engenharia de Software</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Sou estudante de Engenharia de Software na UNINTER e estagiária em
					desenvolvimento de software, com experiência em programação e manutenção de
					sistemas. Anteriormente, atuei como Supervisora do Censo Demográfico no IBGE,
					onde desenvolvi habilidades em gestão de equipes e atendimento ao público. No
					estágio, trabalho com tecnologias como HTML, CSS, JavaScript, PHP e SQL Server,
					e busco constantemente aprimorar minhas competências técnicas para oferecer
					soluções inovadoras e eficazes no desenvolvimento de sistemas.
				</p>
			</div>
		</div>
	)
}
