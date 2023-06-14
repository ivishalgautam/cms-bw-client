import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../../requesMethods";

const initialState = {
  clientInput: [],
  isPending: false,
  // client details
  clientName: "",
  clientEmail: "",
  clientPhone: "",
  // project details
  proName: "",
  proStartDate: "",
  proExpDate: "",
  proEndDate: "",
  proManagers: [],

  // domain details
  domainName: "",
  domainId: "",
  domainPass: "",
  domainStartDate: "",
  domainEndDate: "",

  // hosting details
  hostingName: "",
  hostingId: "",
  hostingPass: "",
  hostingStartDate: "",
  hostingEndDate: "",

  // socials
  facebookUsername: "",
  facebookPass: "",
  facebookPath: "",

  instaUsername: "",
  instaPass: "",
  instaPath: "",

  linkedInUsername: "",
  linkedInPass: "",
  linkedInPath: "",

  twitterUsername: "",
  twitterPass: "",
  twitterPath: "",

  // files
  filename: "",
  fileData: null,
  fileContentType: "",
};

export const getInputValues = createAsyncThunk(
  "get/inputValues",
  async (clientId, thunkAPI) => {
    try {
      const resp = await publicRequest.get(`/client/${clientId}`);
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    // set client details
    setClientName: (state, action) => {
      state.clientName = action.payload;
    },
    setClientEmail: (state, action) => {
      state.clientEmail = action.payload;
    },
    setClientPhone: (state, action) => {
      state.clientPhone = action.payload;
    },

    // set project details
    setProName: (state, action) => {
      state.proName = action.payload;
    },
    setProStartDate: (state, action) => {
      state.proStartDate = action.payload;
    },
    setProExpDate: (state, action) => {
      state.proExpDate = action.payload;
    },
    setProEndDate: (state, action) => {
      state.proEndDate = action.payload;
    },
    setProManagers: (state, action) => {
      state.proManagers = action.payload;
    },

    // set domain details
    setDomainName: (state, action) => {
      state.domainName = action.payload;
    },
    setDomainId: (state, action) => {
      state.domainId = action.payload;
    },
    setDomainPass: (state, action) => {
      state.domainPass = action.payload;
    },
    setDomainStartDate: (state, action) => {
      state.domainStartDate = action.payload;
    },
    setDomainEndDate: (state, action) => {
      state.domainEndDate = action.payload;
    },

    // set hosting details
    setHostingName: (state, action) => {
      state.hostingName = action.payload;
    },
    setHostingId: (state, action) => {
      state.hostingId = action.payload;
    },
    setHostingPass: (state, action) => {
      state.hostingPass = action.payload;
    },
    setHostingStartDate: (state, action) => {
      state.hostingStartDate = action.payload;
    },
    setHostingEndDate: (state, action) => {
      state.hostingEndDate = action.payload;
    },

    // set social details
    setFacebookUsername: (state, action) => {
      state.facebookUsername = action.payload;
    },
    setFacebookPass: (state, action) => {
      state.facebookPass = action.payload;
    },
    setFacebookPath: (state, action) => {
      state.facebookPath = action.payload;
    },

    setInstagramUsername: (state, action) => {
      state.instaUsername = action.payload;
    },
    setInstagramPass: (state, action) => {
      state.instaPass = action.payload;
    },
    setInstagramPath: (state, action) => {
      state.instaPath = action.payload;
    },

    setLinkedInUsername: (state, action) => {
      state.linkedInUsername = action.payload;
    },
    setLinkedInPass: (state, action) => {
      state.linkedInPass = action.payload;
    },
    setLinkedInPath: (state, action) => {
      state.linkedInPath = action.payload;
    },

    setTwitterUsername: (state, action) => {
      state.twitterUsername = action.payload;
    },
    setTwitterPass: (state, action) => {
      state.twitterPass = action.payload;
    },
    setTwitterPath: (state, action) => {
      state.twitterPath = action.payload;
    },

    // set files
    setFileName: (state, action) => {
      state.filename = action.payload;
    },
    setFileData: (state, action) => {
      const { name, size, lastModified } = action.payload;
      console.log(name, size, lastModified);
      state.fileData = { name, size, lastModified };
    },
    setFileContentType: (state, action) => {
      state.fileContentType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInputValues.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getInputValues.fulfilled, (state, action) => {
      state.isPending = false;
      state.clientInput = [];
      state.clientInput = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(getInputValues.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export const {
  setClientName,
  setClientEmail,
  setClientPhone,
  setProName,
  setProStartDate,
  setProExpDate,
  setProEndDate,
  setProManagers,
  setDomainName,
  setDomainId,
  setDomainPass,
  setDomainStartDate,
  setDomainEndDate,
  setHostingName,
  setHostingId,
  setHostingPass,
  setHostingStartDate,
  setHostingEndDate,
  setFacebookUsername,
  setFacebookPass,
  setFacebookPath,
  setInstagramUsername,
  setInstagramPass,
  setInstagramPath,
  setLinkedInUsername,
  setLinkedInPass,
  setLinkedInPath,
  setTwitterUsername,
  setTwitterPass,
  setTwitterPath,
  setFileName,
  setFileData,
  setFileContentType,
} = inputSlice.actions;

export default inputSlice.reducer;
