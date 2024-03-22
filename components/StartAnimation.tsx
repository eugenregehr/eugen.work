'use client'
import { Player } from '@lottiefiles/react-lottie-player'

export default function StartAnimation() {
  return (
    <>
      <Player src={'/static/start_animation.json'} autoplay loop speed={1} />
    </>
  )
}
