interface WebsiteListItemProps {
	url: string
	title: string
}

export default function WebsiteListItem(props: WebsiteListItemProps) {
	const { url, title } = props

	return (<>
		<li className='my-4'>
			<a href={`${url}`} target='_blank' rel='noopener noreferrer' className='underline'>
				{title}
			</a>
		</li>
	</>)
}

