export default [
	{
		"page": "/musicians",
		"pattern": "/musicians"
	},
	{
		"page": "/musician",
		"pattern": "/:musicianName"
	},
	{
		"page": "/musician/albums",
		"pattern": "/:musicianName/albums"
	},
	{
		"page": "/musician/albums/_id",
		"pattern": "/:musicianName/albums/:albumName"
	},
]
