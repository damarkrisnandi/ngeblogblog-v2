import getPosts from "@/helpers/getPosts";
import { PaginationData } from "@/constants/pagination"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../ui/pagination";

const dataPosts = getPosts();
const pageSize = Math.ceil(dataPosts.length / PaginationData.pageSize)

export default function AppPagination(props: any) {
  return (
    <Pagination className="p-8">
      <PaginationContent>
        <PreviousButton {...props}/>
        <CurrentMinus1Button {...props}/>
        <PaginationItem>
          <b>{props.params.page}</b>
        </PaginationItem>
        <CurrentPlus1Button {...props}/>
        <NextButton {...props}/>
      </PaginationContent>
    </Pagination>
  );
}

function PreviousButton(props: any) {
    if (props.params.page > 1) {
        return (
            <PaginationItem>
                <PaginationPrevious href={`${parseInt(props.params.page) - 1}`} />
            </PaginationItem>
        )
    }

    return null
}
function CurrentMinus1Button(props: any) {
    if (props.params.page > 1) {
        return (
            <PaginationItem>
                <PaginationLink href={`${parseInt(props.params.page) - 1}`}>{`${parseInt(props.params.page) - 1}`}</PaginationLink>
            </PaginationItem>
        )
    }

    return null
}

async function NextButton(props: any) {
    if (props.params.page < pageSize) {
        return (
            <PaginationItem>
                <PaginationNext href={`${parseInt(props.params.page) + 1}`} />
            </PaginationItem>
        )
    }

    return null
}

function CurrentPlus1Button(props: any) {
    if (props.params.page < pageSize) {
        return (
            <PaginationItem>
                <PaginationLink href={`${parseInt(props.params.page) + 1}`}>{`${parseInt(props.params.page) + 1}`}</PaginationLink>
            </PaginationItem>
        )
    }

    return null
}
