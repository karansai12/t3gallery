

const mockUrls = [
  " https://ih93qec1f2.ufs.sh/f/5rZA8RmoJK97s0GxFjHECgKe0IQfGbdjkVcqzMP8H9ta4NhS",
  "https://ih93qec1f2.ufs.sh/f/5rZA8RmoJK97JFC72tRQ6RSYyGDNUuB4fpnH1tcgWiadTlsI",
  "https://ih93qec1f2.ufs.sh/f/5rZA8RmoJK97AtfZL3Kk6BHuDPKwvU9TgYalLc0OnJI2XsSN",
  "https://ih93qec1f2.ufs.sh/f/5rZA8RmoJK97TuuiDVsoPOLKmbrsdUXRwWYMDNuT6e02pHh4"

]


export default function HomePage() {
  const mockImage = mockUrls.map((url,index)=>({
    id:index +1,
    url
  }))
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImage.map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="w-32 h-32 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
