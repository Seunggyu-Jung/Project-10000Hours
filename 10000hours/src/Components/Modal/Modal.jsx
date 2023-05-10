
export default function Modal({ children, modalClose }) {

    

  return (
    <div className='Modal-backdrop'>
        <article className='Modal'>
            {children}
            <button onClick={modalClose}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
        </article>
    </div>
  )
}
