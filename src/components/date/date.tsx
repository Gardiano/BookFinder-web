import dayjs from 'dayjs'

interface AuthorsProps {
  className: string
  published_date: any
}

export const Date = (props: AuthorsProps) => {
  return (
    <> {props.published_date &&
      <p className={`${props.className}`}>
        Publicado Em: {dayjs(props.published_date).format('DD/MM/YYYY')}
      </p>
    }
    </>
  )
}