import Image from 'next/image'
import Link from 'next/link'

function RecipeCard({ recipe }) {
	const { title, slug, cookingTime, thumbnail } = recipe.fields
	return (
		<div className='card'>
			<div className='container'>
				<div className='featured'>
					<Image
						alt=''
						className='image'
						src={'https:' + thumbnail.fields.file.url}
						width={thumbnail.fields.file.details.image.width}
						height={thumbnail.fields.file.details.image.height}
					/>
				</div>
				<div className='content'>
					<div className='info'>
						<h4>{title}</h4>
						<p>Takes approx {cookingTime} mins to make</p>
					</div>
					<div className='actions'>
						<Link href={'/recipes/' + slug}>
							<a>cook this</a>
						</Link>
					</div>
				</div>
			</div>
			<style jsx>{`
				.card {
					transform: rotateZ(-1deg);
					width: 50%;
				}
				.container {
					padding: 40px;
				}
				.content {
					border-radius: 3px;
					background: #fff;
					box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
					margin: 0;
					position: relative;
					top: -50px;
					left: -10px;
				}

				.image {
					border-radius: 3px;
					max-width: 80%;
				}
				.info {
					padding: 16px;
				}
				.info h4 {
					margin: 4px 0;
					text-transform: uppercase;
				}
				.info p {
					margin: 0;
					color: #777;
				}
				.actions {
					margin-top: 20px;
					display: flex;
					justify-content: flex-end;
				}
				.actions a {
					color: #fff;
					background: #f01b29;
					padding: 16px 24px;
					text-decoration: none;
					border-radius: 3px;
				}
			`}</style>
		</div>
	)
}

export default RecipeCard
