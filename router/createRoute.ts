
export const musicians = () => ({
	as: `/musicians`,
	href: `/musicians`
})

export const musicianName = ({ musicianName }: {
	musicianName: string
}) => ({
	as: `/musicians/${musicianName}`,
	href: `/musicians/_id?musicianName=${musicianName}`
})

export const musicianNameAlbumId = ({ musicianName, albumName }: {
	musicianName: string
	albumName: string
}) => ({
	as: `/musicians/${musicianName}/albums/${albumName}`,
	href: `/musicians/_id?musicianName=${musicianName}&albumName=${albumName}`
})
