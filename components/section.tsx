interface Props {
	children: React.ReactNode
}

const Section = ({ children }: Props) => (
	<section className='my-10'>{children}</section>
)

export default Section
