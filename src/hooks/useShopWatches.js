import { useEffect, useState } from 'react'

const initialWatches = []
const initialNewWatch = {
  code: '',
  name: '',
  price: '',
  imageFile: null,
}
const WATCH_STORAGE_KEY = 'shop-user-watches'

const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => resolve(reader.result)
  reader.onerror = () => reject(new Error('Unable to read image file.'))
  reader.readAsDataURL(file)
})

const useShopWatches = ({ visibleCards, setStartIndex }) => {
  const [watches, setWatches] = useState(() => {
    try {
      const rawWatches = localStorage.getItem(WATCH_STORAGE_KEY)
      if (!rawWatches) return initialWatches

      const parsedWatches = JSON.parse(rawWatches)
      return Array.isArray(parsedWatches) ? parsedWatches : initialWatches
    } catch {
      return initialWatches
    }
  })
  const [newWatch, setNewWatch] = useState(initialNewWatch)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    localStorage.setItem(WATCH_STORAGE_KEY, JSON.stringify(watches))
  }, [watches])

  const handleWatchInputChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'imageFile') {
      const selectedFile = files && files[0] ? files[0] : null
      setNewWatch((current) => ({ ...current, imageFile: selectedFile }))
      setFormStatus({ type: '', message: '' })
      return
    }

    setNewWatch((current) => ({ ...current, [name]: value }))
    setFormStatus({ type: '', message: '' })
  }

  const handleAddWatch = async (e) => {
    e.preventDefault()

    if (!newWatch.imageFile || !newWatch.name.trim() || !newWatch.code.trim() || !newWatch.price.trim()) {
      setFormStatus({ type: 'error', message: 'Please provide image, watch name, watch ID, and price.' })
      return
    }

    if (newWatch.imageFile.type !== 'image/png') {
      setFormStatus({ type: 'error', message: 'Only PNG images are allowed.' })
      return
    }

    try {
      const imageDataUrl = await readFileAsDataUrl(newWatch.imageFile)

      const formattedPrice = newWatch.price.trim().startsWith('$')
        ? newWatch.price.trim()
        : `$${newWatch.price.trim()}`

      const watchToAdd = {
        code: newWatch.code.trim(),
        name: newWatch.name.trim(),
        price: formattedPrice,
        limit: 'Custom listing',
        img: imageDataUrl,
        variant: watches.length % 2 === 0 ? 1 : 2,
      }

      setWatches((current) => [...current, watchToAdd])
      setStartIndex(Math.max(0, watches.length + 1 - visibleCards))
      setNewWatch(initialNewWatch)
      setFormStatus({ type: 'success', message: 'Watch added to carousel.' })
    } catch {
      setFormStatus({ type: 'error', message: 'Could not save image. Please try another PNG file.' })
    }
  }

  return {
    watches,
    newWatch,
    formStatus,
    handleWatchInputChange,
    handleAddWatch,
  }
}

export default useShopWatches